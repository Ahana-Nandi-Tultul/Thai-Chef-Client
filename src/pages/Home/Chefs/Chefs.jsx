import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaThumbsUp } from "react-icons/fa";

const Chefs = ({chef}) => {
    const {id, name, picture, years_of_experience, number_of_recipes, number_of_likes, description} = chef;
    return (
        <div>   
        <Col key={id}>
          <Card>
            <Card.Img variant="top" src={picture} style={{height: "530px"}} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text style={{height: "270px"}}>
               {description}
              </Card.Text>
              <ul>
                    <li>Experiences: {years_of_experience} years</li>
                    <li>Recipes: {number_of_recipes}</li>
               </ul>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='d-flex align-items-center flex-grow-1'>
                    <FaThumbsUp className='text-primary'/>
                    <span className='ms-2'>{`${parseInt(number_of_likes) > 1000 ? number_of_likes/1000 + 'k' : number_of_likes}`}</span>
                </div>
                <div>
                    <Button variant="success">View Recipes</Button>
                </div>
            </Card.Footer>
          </Card>
        </Col>
        </div>
    );
};

export default Chefs;