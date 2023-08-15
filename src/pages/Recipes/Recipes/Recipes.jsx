import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./Recipes.css";
import LazyLoad from 'react-lazy-load';

const Recipes = () => {
    const chefid = useParams();
    const chef_id = chefid.id;
    const recipes = useLoaderData();
    const [chef, setChef] = useState({});
    console.log(recipes);
    useEffect(()=> {
        fetch(`https://thai-orchid-bistro-server-ahana-nandi-tultul.vercel.app/chefs/${chef_id}`)
        .then(res => res.json())
        .then(data => setChef(data))
        .catch(error => console.error(error))
    }, [])

    const {id, name, picture, years_of_experience, number_of_recipes, number_of_likes, description} = chef;
    return (
        <div>
            <div>
                <Container>
                    <Row className='py-5 align-items-center'>
                        <Col sm={6}>
                            <h2 className="display-4 fw-bold mb-2">{name}</h2>
                            <p className='text-secondary fs-5'>{description}</p>
                            <ul>
                                <li className='fs-5'>Experiences: {years_of_experience}</li>
                                <li className='fs-5'>Number of Recipes(Here): {recipes.length}</li>
                                <li className='fs-5'>Total Likes:<span>{`${parseInt(number_of_likes) >
                                     1000 ? number_of_likes/1000 + 'k' : number_of_likes}`}</span></li>
                            </ul>
                        </Col>
                        <Col sm={6}>
                        <LazyLoad height={500}>
                            <Image src={picture} rounded className='w-100' style={{height: "700px"}} />
                        </LazyLoad>
                        </Col>
                    </Row>
                </Container>
            </div>
           <div style={{marginTop: "150px"}}>
            <Container>
            <h2 className='display-5 fw-bold text-center mb-5'>Available Recipes</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                        recipes.map(recipe => <Recipe
                        key={recipe.id}
                        recipe={recipe}
                        ></Recipe>)
                    }
                </Row>
            </Container>
           </div>
            
        </div>
    );
};

export default Recipes;