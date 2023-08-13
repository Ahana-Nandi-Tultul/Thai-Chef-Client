import React from 'react';
import './Home.css';
import Banner from '../../Banner/Banner';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';
import Features from '../Features/Features';

const Home = () => {
    const thaiChefs = useLoaderData();
    const allChefs = thaiChefs.thai_chefs;
    console.log(allChefs);
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            <Container>
                <div style={{marginTop: "150px"}}>
                    <h2 className='display-5 fw-bold text-center mb-4'>Our Chefs</h2>
                    <Row xs={1} md={2} lg = {3} className="g-4">
                    {
                        allChefs.map(chef => <Chefs
                        key={chef.id}
                        chef={chef}
                        >

                        </Chefs>)
                    }
                    </Row>
                </div>
                <Features></Features>
            </Container>
        </div>
    );
};

export default Home;