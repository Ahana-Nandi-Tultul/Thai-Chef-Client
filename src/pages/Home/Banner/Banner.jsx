import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';
import './Banner.css'
import LazyLoad from 'react-lazy-load';

const Banner = () => {
    return (
        <div className='position-relative'>
                <Carousel>
                    <Carousel.Item className='item' style={{height: "700px"}}>
                        <LazyLoad height={500}>
                            <Image src={banner1} fluid text="First slide" className='opacity-75'/>
                        </LazyLoad>
                    </Carousel.Item>
                    <Carousel.Item className='item' style={{height: "700px"}}>
                        <LazyLoad height={500}>
                            <Image src={banner2} fluid text="First slide" className='opacity-75' />
                        </LazyLoad>
                    </Carousel.Item>
                    <Carousel.Item className='item' style={{height: "700px"}}>
                        <LazyLoad height={500}>
                            <Image src={banner3} fluid text="First slide" className='opacity-75' />
                        </LazyLoad>
                    </Carousel.Item>
                </Carousel>
                <div className='banner-des'>
                    <h2 className='text-white display-2 fw-bold'>Welcome to! Thai Orchid Chefs</h2>
                    <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, accusamus autem fugiat ad officiis quisquam. Nihil facilis qui assumenda eaque.</p>
                </div>
            </div>
    );
};

export default Banner;