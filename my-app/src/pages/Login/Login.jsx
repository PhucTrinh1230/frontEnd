import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { jwtDecode } from 'jwt-decode';

function Login() {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [roles, setRoles] = useState(null);
    const [link, setLink] = useState("http://localhost:8080/oauth2");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
                username,
                password
            });
            const { token } = response.data;
            console.log(token);
           localStorage.setItem('tokenFromJava',token);

           const decoded = jwtDecode(token);
           setRoles(decoded.roles);
           console.log(decoded.roles)

           
           if(token != null)
           {
            alert('Đăng nhập thành công')
            localStorage.setItem('roleByLogin',decoded.roles)
            
            window.location.href = "/Store/" + decoded.email 
          
           }
          
        } catch (error) {
          console.log(error);
            setError('Incorrect username or password');
            alert("Sai tài khoản hoặc mật khẩu");
        }
    };

    
    //   const handleLoginbyGoogle = async (e) =>
    //   {
    //     e.preventDefault;
    //     try { 
    //       const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
    //       username,
    //       password
    //   });
          
    //     } catch (error) {
    //       console.error(error)
    //     }
    //   }
    // const handleGoogle = () => {
    //   fetch("http://localhost:8080/oauth2")
    //   .then(response => {
    //     setLink(response.data.link);
    //     console.log(response.data.link);
    //   }).catch(error => {
    //     console.error(error);
    //   });
    // }








  return (
    <div className="bgLogin" style={{backgroundImage:'url(https://i.imgur.com/XvFEiXv.jpeg)', height:'800px', marginTop:'-90px'}}>
    <Container className="loginForm" >
      <Row>
        <Col xl={12} className="d-flex justify-content-center align-items-center p-4">
          <div className="login-form-wrapper " style={{ backgroundImage: 'url(https://i.imgur.com/DXDXa9j.png)', width:'120%', height:'130%' , backgroundRepeat:'no-repeat', marginLeft:'0px',marginTop:'160px'}}>
   
            <Form className="usernameLogin" style={{width : '400px', marginLeft:'50%',marginTop:'170px'}} onSubmit={handleSubmit}>
              <Form.Group controlId="username" className="mb-4">
                <Form.Control type="text" size="lg" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  style={{fontSize:'16px', border:' 2px solid rgba(255, 255, 255, 0.5)',  backgroundColor: 'transparent',   color: 'white' }}/>
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Control type="password" size="lg" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{fontSize:'16px', border:' 2px solid rgba(255, 255, 255, 0.5)',  backgroundColor: 'transparent',   color: 'white' }} />
              </Form.Group>

              <div className="d-flex justify-content-between mx-4 mb-4 text-white">
                <Form.Check type="checkbox" label="Remember me" />
                <a href="#!" style={{color:'white'}}>Forgot password?</a>
              </div>

              <Button type="submit" className="mb-4 w-75" size="lg" style={{fontSize:'16px', marginLeft:'49px'}}>Sign in</Button>

            

              <Button className="mb-4 w-75" size="lg" style={{ backgroundColor: '#3b5998', color: 'white', fontSize:'16px' ,marginLeft:'49px'}}>
                <FontAwesomeIcon icon={faFacebookF} className="mx-2" />
                Continue with Facebook
              </Button>

              {/* <Button className="mb-4 w-75" size="lg" style={{ backgroundColor: 'white', color: 'black' ,fontSize:'16px',marginLeft:'49px'}}>
                <FontAwesomeIcon style={{ color: 'red' }} icon={faGoogle} className="mx-2" />
                Continue with Google
              </Button> */}
               <a href="http://localhost:8080/oauth2">Google</a>
            </Form>
           
          </div>
        </Col>

      
      </Row>
    </Container>
    </div>
  );
}

export default Login;
