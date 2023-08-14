import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Navbar bg="success" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Welcome to Blogs!!!</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <div style={{marginTop: "100px"}}>
                <Container>
                    <h2 className='display-5 text-center fw-semibold mb-5'>Answer of Questions</h2>
                    <div>
                        <div className='mb-4'>
                            <h2 className='display-6 fs-4'>Q1.Tell us the differences between uncontrolled and controlled components. </h2>
                            <p><strong>Ans:</strong>In React, controlled components refer to components that have their state and behavior
                             controlled by the parent component. These components rely on props passed down from the parent component to 
                             update their state and behavior. Uncontrolled components refer to components that manage their own state 
                             internally. They use a ref to access the DOM element's current value and update the state accordingly.
                             Uncontrolled components are more defficult to track as they use ref to access current value of DOM element.But
                             for large project it becomes an advantage.</p>
                        </div>
                        <div className='mb-4'>
                            <h2 className='display-6 fs-4'>Q2. How to validate React props using PropTypes? </h2>
                            <p><strong>Ans:</strong>In React, as parent components can pass any data to child throught props we need to check
                            or validate the type of props using PropTypes. The PropTypes is a package which we need to install for using. With
                            this we validate the props.</p>
                        </div>
                        <div className='mb-4'>
                            <h2 className='display-6 fs-4'>Q3. Tell us the difference between nodejs and express js.</h2>
                            <p><strong>Ans:</strong>Node.js is an open source and cross-platform runtime environment for executing JavaScript 
                            code outside of a browser. On the other hand, Express is a small framework that sits on top of Node.js’s web server
                            functionality to simplify its APIs and add helpful new features. Node.js is used to build server-side, input-output,
                             event-driven apps, it is written in C, C++, JavaScript and is built on Google’s V8 engine. But Express.js used to build
                            web-apps using approaches and principles of Node.js., it is written in JavaScript and it is built on Node.js.</p>
                        </div>
                        <div className='mb-4'>
                            <h2 className='display-6 fs-4'>Q4. What is a custom hook, and why will you create a custom hook? </h2>
                            <p><strong>Ans:</strong>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
                            custom Hooks in React are a way to encapsulate reusable logic and state within functional components. Custom Hooks are
                            typically used for local component state management and can handle specific functionality, such as form validation or API calls. 
                            They promote code reuse and simplify the logic within components. Custom Hooks offer a more lightweight and flexible approach to state management within individual components, without the need for a centralized store or complex reducers.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Blog;