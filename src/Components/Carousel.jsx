import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import axios from 'axios';
// import Swiper core and required modules
import { Pagination , Navigation} from 'swiper/modules';
const Carousel = () => {
    const [headImages, setHeadImages] = useState([]);

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const response = await axios.get(`https://picsum.photos/v2/list`);
                setHeadImages(response.data);
            } catch (error) {
                console.error('Error loading header images', error);
            }
        };
        fetchHeader();
    }, []);
  return (
    <Swiper className='rounded'
    modules={[ Pagination,Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000 }}
            navigation={true}
        >
            {headImages.slice(10, 15).map((image,index) => (
                <SwiperSlide key={index}>
                    <img
                        src={image.download_url}
                        alt={image.author}
                        className="w-full h-64 object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
  );
};

export default Carousel;
