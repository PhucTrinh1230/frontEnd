import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { jwtDecode } from 'jwt-decode';
function Register() {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState(null);
    const [confirmPassword, setconfirmPassword] = useState('');
    const roles = ['USER'];


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
       
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                username,
                password,
                email,
                roles
            });
           
            console.log(response.data)
            const { token } = response.data;
            console.log(token);
           localStorage.setItem('tokenFromJava',token);
           const decoded = jwtDecode(token);
           console.log(decoded.roles)

           
           if( token != null )
           {
            alert('Đăng ký thành công')
            window.location.href = "/store"
            localStorage.setItem('roleByLogin',decoded.roles)
              
          
           }
          
        } catch (error) {
          console.error(error);
          
        }
    };

  return (
    <div className="bgRegister" >
    <Container className="Register">
      <Row>
        <Col xl={12} className="d-flex justify-content-center align-items-center p-4">
          <div className="register-form-wrapper  " style={{ backgroundImage: 'url(https://i.imgur.com/DXDXa9j.png)', width:'120%', height:'130%' , backgroundRepeat:'no-repeat', marginLeft:'0px',marginTop:'200px'}}>
   
            <Form className="usernameLogin" style={{width : '400px', marginLeft:'56%',marginTop:'240px'}} onSubmit={handleSubmit}>
              <Form.Group controlId="username" className="mb-4">
                <Form.Control  type="text" size="lg" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} 
                style={{fontSize:'16px', border:' 2px solid rgba(255, 255, 255, 0.5)',  backgroundColor: 'transparent',   color: 'white' }} />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Control type="password" size="lg" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} 
                style={{fontSize:'16px', border:' 2px solid rgba(255, 255, 255, 0.5)',  backgroundColor: 'transparent',   color: 'white' }}  />
              </Form.Group>

              <Form.Group controlId="confirmformPassword" className="mb-4">
                <Form.Control type="password" size="lg" placeholder="ConfirmPassword" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} 
                style={{fontSize:'16px', border:' 2px solid rgba(255, 255, 255, 0.5)',  backgroundColor: 'transparent',   color: 'white' }}  />
              </Form.Group>

              

              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Control type="email" size="lg" placeholder="Email?" value={email} onChange={(e) => setEmail(e.target.value)} 
                style={{fontSize:'16px', border:' 2px solid rgba(255, 255, 255, 0.5)',  backgroundColor: 'transparent',   color: 'white' }}  />
              </Form.Group>
       
              <Button type="submit" className="mb-4 w-100"  style={{fontSize:'16px', marginLeft:'0  px'}}>Sign Up</Button>

            

              <Button className="mb-4 w-1"  style={{ backgroundColor: '#3b5998', color: 'white', fontSize:'11px' ,marginLeft:'0px'}}>
                <FontAwesomeIcon icon={faFacebookF} className="mx-1" />
                Continue with Facebook
              </Button>

              <Button className="mb-4 w-1"  style={{ backgroundColor: 'white', color: 'black' ,fontSize:'11px',marginLeft:'50px', marginTop:'0px'}}>
                <FontAwesomeIcon style={{ color: 'red' }} icon={faGoogle} className="mx-1" />
                Continue with Google
              </Button>
            </Form>
          </div>
        </Col>

      
      </Row>
    </Container>
    </div>
  );
}

export default Register;
