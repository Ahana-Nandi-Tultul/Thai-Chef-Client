import React from 'react';
import './Home.css';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';
import Features from '../Features/Features';
import Banner from '../Banner/Banner';
import Speciality from '../Speciality/Speciality';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    const thaiChefs = useLoaderData();
    const allChefs = thaiChefs.thai_chefs;
    console.log(allChefs);
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            <Container>
            <Speciality></Speciality>
                <div style={{marginTop: "150px"}}>
                    <h2 className='display-5 fw-bold text-center mb-5'>Our Chefs</h2>
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
            <Footer></Footer>
        </div>
    );
};

export default Home;