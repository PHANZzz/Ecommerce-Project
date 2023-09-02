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
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchImages() {
            const response = await fetch('https://list-images.vercel.app/');
            const images = await response.json();
            setImages(images);
            setLoading(false);
        }
        fetchImages();
    }, []);

    return (
        <>
            {isLoading === true ?
                <div className='flex justify-center items-center h-screen text-4xl '>
                    <span className="loading loading-dots loading-lg"></span>
                </div> : <div className='bg-violet-50 lg:flex'>
                    {images.map((image) => (
                        <div key={image.name} className="card card-compact w-96 rounded-lg shadow-lg overflow-hidden bg-blue-50 ">
                            <figure style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
                                <img src={`data:image/png;base64,${image.img.data}`} alt={image.name} className="w-full h-full object-cover object-center" />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-lg font-semibold text-gray-900 truncate">{image.name}</h2>
                                <p className="text-gray-700 mt-1 Price font-bold">{image.price}$</p>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-secondary rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 ">Add Card</button>
                                </div>
                            </div>
                        </div>


                    ))}

                </div>}
            {
                isLoading === true ? null :
                    <div className='mt-12'>
                        <Footer />
                    </div>
            }
        </>

    );
}
