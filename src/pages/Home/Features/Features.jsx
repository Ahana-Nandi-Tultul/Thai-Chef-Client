import React from 'react';
import { FaCalendarAlt, FaChartPie, FaChartBar, FaRegClock, FaPalette } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";

const Features = () => {
    return (
        <div style={{marginTop: "150px"}}>
            <h2 className="display-5 fw-bold mb-5 text-center">Our Features</h2>
            <div className="row row-cols-1 row-cols-md-3 text-center">
                <div className="col border-bottom pt-3 pb-5 px-4">
                    <FaCalendarAlt className='mb-4 text-success' style={{fontSize: "80px"}}/>
                    <h3 className="h3 fw-bold mb-4">Early Booking</h3>
                    <p className="text-black-50 mb-4">There are many feature, but Lorem ipsum dolor sit amet can be said to be
                    our one of the most praised features that we are providing to our client or customers</p>
                </div>
                <div className="col border border-top-0 pt-3 pb-5 px-4">
                    <FaChartPie className='mb-4 text-success' style={{fontSize: "80px"}}/>
                    <h3 className="h3 fw-bold mb-4">Business</h3>
                    <p className="text-black-50 mb-4">There are many feature, but Lorem ipsum dolor sit amet can be said to be
                    our one of the most praised features that we are providing to our client or customers</p>
                </div>
                <div className="col border-bottom pt-3 pb-5 px-4">
                    <FaChartBar className='mb-4 text-success' style={{fontSize: "80px"}}/>
                    <h3 className="h3 fw-bold mb-4">Customer Satisfaction</h3>
                    <p className="text-black-50 mb-4">There are many feature, but Lorem ipsum dolor sit amet can be said to be
                    our one of the most praised features that we are providing to our client or customers</p>
                </div>
                <div className="col border-end pt-3 pb-5 px-4">
                    <FaRegClock className='mb-4 text-success' style={{fontSize: "80px"}}/>
                    <h3 className="h3 fw-bold mb-4">Food Delivery</h3>
                    <p className="text-black-50 mb-4">There are many feature, but Lorem ipsum dolor sit amet can be said to be
                    our one of the most praised features that we are providing to our client or customers</p>
                </div>
                <div className="col border-end pt-3 pb-5 px-4">
                    <FaPalette className='mb-4 text-success' style={{fontSize: "80px"}}/>
                    <h3 className="h3 fw-bold mb-4">Decoration</h3>
                    <p className="text-black-50 mb-4">There are many feature, but Lorem ipsum dolor sit amet can be said to be
                    our one of the most praised features that we are providing to our client or customers</p>
                </div>
                <div className="col  pt-3 pb-5 px-4">
                    <MdFoodBank className='mb-4 text-success' style={{fontSize: "80px"}}/>
                    <h3 className="h3 fw-bold mb-4">Food Variety</h3>
                    <p className="text-black-50 mb-4">There are many feature, but Lorem ipsum dolor sit amet can be said to be
                    our one of the most praised features that we are providing to our client or customers</p>
                </div>
            </div>
        </div>
    );
};

export default Features;