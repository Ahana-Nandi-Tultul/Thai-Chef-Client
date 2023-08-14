import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';


const Recipe = ({recipe}) => {
    const {id, cooking_method, image, ingredients, name, rating
    } = recipe;
    return (
        <Col key={id}>
          <Card>
            <Card.Img variant="top" src={image} style={{height: "250px"}}/>
            <Card.Body>
              <Card.Title className='display-6 fw-semibold'>{name}</Card.Title>
              <Card.Text style={{height: "330px"}}>
                <strong>Cooking Method</strong> {cooking_method}
              </Card.Text>
                <span><strong>Ingredients:</strong></span>
              <ul>{
                    ingredients.map((i, idx) => <li key={idx}>{i}</li>)
                    }</ul>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center gap-2 flex-grow-1'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(rating)}
                        readOnly
                        />
                    <span>{rating}</span>
                    </div>
                   <Link to={`book/:${id}`}><Button variant="success">Favourite</Button></Link>
                </div>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Recipe;