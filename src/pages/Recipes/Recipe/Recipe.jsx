import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Recipe = ({recipe}) => {
    const {id, cooking_method, image, ingredients, name, ratting} = recipe;
    return (
        <Col key={id}>
          <Card>
            <Card.Img variant="top" src={image} style={{height: "250px"}}/>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <strong>Cooking Method</strong> {cooking_method}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default Recipe;