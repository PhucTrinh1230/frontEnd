import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { jwtDecode } from 'jwt-decode';
function Register() {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
                username,
                password
            });
            const { token } = response.data;
            console.log(token);
           localStorage.setItem('tokenFromJava',token);

           const decoded = jwtDecode(token);
    
           console.log(decoded.roles)

           
           if(token != null)
           {
            alert('Đăng nhập thành công')
            localStorage.setItem('roleByLogin',decoded.roles)
          
           }
          
        } catch (error) {
          console.log(error);
            setError('Incorrect username or password');
            alert("Sai tài khoản hoặc mật khẩu");
        }
    };

  return (
    <div className="bgRegister" >
    <Container className="">
      <Row>
        <Col xl={12} className="d-flex justify-content-center align-items-center p-4">
          <div className="login-form-wrapper " style={{ backgroundImage: 'url(       https://exploringbits.com/wp-content/uploads/2022/01/discord-banner-4.gif)', width:'100%', height:'100%' , backgroundRepeat:'no-repeat', marginLeft:'100px'}}>
   
            <Form className="usernameLogin" style={{width : '500px', marginLeft:'18%',marginTop:'40px'}} onSubmit={handleSubmit}>
              <Form.Group controlId="username" className="mb-4">
                <Form.Control type="text" size="lg" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{fontSize:'16px'}} />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Control type="password" size="lg" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{fontSize:'16px'}} />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Control type="password" size="lg" placeholder="Confirmpassword" value={password} onChange={(e) => setPassword(e.target.value)} style={{fontSize:'16px'}} />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Control type="email" size="lg" placeholder="Email?" value={password} onChange={(e) => setEmail(e.target.value)} style={{fontSize:'16px'}} />
              </Form.Group>
       
              <Button type="submit" className="mb-4 w-75" size="lg" style={{fontSize:'16px', marginLeft:'49px'}}>Sign in</Button>

            

              <Button className="mb-4 w-75" size="lg" style={{ backgroundColor: '#3b5998', color: 'white', fontSize:'16px' ,marginLeft:'49px'}}>
                <FontAwesomeIcon icon={faFacebookF} className="mx-2" />
                Continue with Facebook
              </Button>

              <Button className="mb-4 w-75" size="lg" style={{ backgroundColor: 'white', color: 'black' ,fontSize:'16px',marginLeft:'49px'}}>
                <FontAwesomeIcon style={{ color: 'red' }} icon={faGoogle} className="mx-2" />
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
