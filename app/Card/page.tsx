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
      <div id="image-list" className='5'>
            {images.map((image) => (
                <div key={image.name} className="card card-compact w-96 bg-red shadow-xl  ">
                    <figure>
                        <img src={`data:image/png;base64,${image.img.data}`} alt={image.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{image.name}</h2>
                        <p className="Price">{image.price}$</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Add Card</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className='mt-12'><Footer/></div>
        </div>
      </>
        
    );
}
