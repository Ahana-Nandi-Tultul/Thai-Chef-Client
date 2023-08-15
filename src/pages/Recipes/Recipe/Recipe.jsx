import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast from 'react-hot-toast';


const Recipe = ({recipe}) => {
    const {id, cooking_method, image, ingredients, name, rating} = recipe;
    const [favo, setFavo] = useState(false)
    const notify = () => {
        toast('This Recipe is your Favourite')
        setFavo(true)
    };
    return (
        <Col key={id}>
          <Card>
            <Card.Img variant="top" src={image} style={{height: "250px"}}/>
            <Card.Body>
              <Card.Title className='display-6 fw-semibold'>{name}</Card.Title>
              <Card.Text>
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
                    {
                        favo ? <Button variant="success" onClick={notify} disabled>Favourite</Button> :
                        <Button variant="success" onClick={notify} >Favourite</Button>
                    }
                   
                </div>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Recipe;