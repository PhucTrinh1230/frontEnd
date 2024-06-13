import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const OAuth = () => {
  return (
    <div>
      
      <Form className="usernameLogin" style={{width : '500px', marginLeft:'18%',marginTop:'40px'}} >
              <Form.Group controlId="username" className="mb-4">
                <Form.Control type="text" size="lg" placeholder="Username"   style={{fontSize:'16px'}} />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Control type="password" size="lg" placeholder="Password"  style={{fontSize:'16px'}} />
              </Form.Group>

              <a href="http://localhost:8080/login">
              Google
                </a>

              
              </Form>

    </div>
  )
}

export default OAuth
