import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footer from "../../../assets/footer.png";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer text-light'>
            <Container>
                <Row>
                    <Col sm={4} >
                        <h2 className='display-3 fw-bold'>Thai Chefs</h2>
                        <p>Thai food is one of the most popular type of food.Thai food is renowned for 
                            its harmonious blend of flavors, striking a balance between sweet, spicy, sour, and salty.</p>
                        <img src={footer} alt=""/>
                    </Col>
                    <Col sm={2} className='col'>
                        <h2>Company</h2>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </Col>
                    <Col sm={2}  className='col'>
                        <h2>Product</h2>
                        <p>Prototype</p>
                        <p>Plans & Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </Col>
                    <Col sm={2}  className='col'>
                        <h2>Support</h2>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </Col>
                    <Col sm={2}  className='col'>
                        <h2>Contact</h2>
                        <p>555 4th 5t NW, Washington</p>
                        <p>+88 01750 000 000</p>
                    </Col>
                </Row>
                <hr/>
                <div className='d-flex justify-content-between'>
                    <p>@2023 ThaiChefs. All Rights Reserved</p>
                    <p>Powered by ThaiChefs</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;