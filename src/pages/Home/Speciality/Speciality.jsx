import React from 'react';
import speciality from '../../../assets/speciality.png'
import { Col, Image, Row } from 'react-bootstrap';

const Speciality = () => {
    return (
        <div style={{marginTop: "150px"}}>
            <Row>
                <Col sm={4}>
                    <h2 className="display-5 fw-bold mb-5 text-center">Thai Food Specialities</h2>
                    <p className='text-secondary'>Thai food is renowned for its harmonious blend of flavors, striking a balance between sweet, spicy, sour, and salty. The liberal use of aromatic herbs like lemongrass, basil, and cilantro, along with pungent ingredients like fish sauce and shrimp paste, creates a unique taste profile. Vibrant colors and intricate presentation showcase its visual appeal. The use of fresh ingredients and skillful preparation techniques contribute to the 
                        distinctive textures and layers of each dish, making Thai cuisine a tantalizing sensory experience.</p>
                </Col>
                <Col sm={8}>
                    <Image src={speciality} rounded className='img-fluid' />
                </Col>
            </Row>
        </div>
    );
};

export default Speciality;