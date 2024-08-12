import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Carousel from './Carousel';

const ImageGallery = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
                setImages(prevImages => [...prevImages, ...response.data]);
            } catch (error) {
                console.error("Error loading images", error);
            }
            setLoading(false);
        };

        fetchImages();
    }, [page]);

    return (
        <div className='container mx-auto m-3 p-2'>
            <div className='m-3 items-center'>
                <Carousel />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {images.map((image) => (
                    <div
                        key={image.id}
                        className='rounded overflow-hidden hover:cursor-pointer transform transition-transform hover:scale-105 duration-100'
                    >
                        <img
                            className='object-fill w-full'
                            style={{ objectFit: 'cover', height: '200px' }}
                            src={image.download_url}
                            alt={image.author}
                        />
                    </div>
                ))}
            </div>
            {loading && <p className='text-center mt-5'>Loading...</p>}
            <Pagination setPage={setPage} />
            
        </div>
    );
};

export default ImageGallery;
