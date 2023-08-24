"use client"
import { useEffect, useState } from 'react';
import Footer from '../footer/footer';

interface Image {
    name: string;
    price: number;
    img: {
        data: string;
    };
}

export default function ImageList() {
    const [images, setImages] = useState<Image[]>([]);

    useEffect(() => {
        async function fetchImages() {
            const response = await fetch('https://list-images.vercel.app/');
            const images = await response.json();
            setImages(images);
        }
        fetchImages();
    }, []);

    return (
        <>
            <div>
                {images.map((image) => (
                    <div key={image.name} className="card card-compact w-96 rounded-lg shadow-lg overflow-hidden bg-white">
                        <figure style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
                            <img src={`data:image/png;base64,${image.img.data}`} alt={image.name} className="w-full h-full object-cover object-center" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg font-semibold text-gray-900 truncate">{image.name}</h2>
                            <p className="text-gray-700 mt-1 Price">{image.price}$</p>
                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-primary rounded-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Card</button>
                            </div>
                        </div>
                    </div>


                ))}
                <div className='mt-12'><Footer /></div>
            </div>
        </>

    );
}
