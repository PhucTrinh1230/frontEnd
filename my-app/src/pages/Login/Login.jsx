import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, InputGroup, FormControl, FormCheck } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { GetUserbyID } from '../../services/userService';
import  axios  from 'axios';

function Login() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  } ;


     const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Id = useParams;
    const handleLogin = async (e) =>
    {
      e.preventDefault();
      try{
        const Id = 2;
          // GetUserbyID(Id);
           const responeAccount =  await axios.get(`http://localhost:8080/api/account/${Id}`);
           const account = responeAccount.data;
          if(account.email === email && account.password === password)
          {
            alert('Đăng nhập thành công')
            window.location.href="http://localhost:3000/store"
            localStorage.setItem('username',account.email)
          }
          else{
            alert('Sai tài khoản hoặc mật khẩu')
          }
         
      }
      catch{

      }
    }
  



  return (
    <Container className="p-3 my-5 d-flex flex-column w-50">

      <Row className='mb-3  d-flex flex-row  mx-auto justify-content-between'>
        <Col>
          <Button onClick={() => handleJustifyClick('tab1')} variant={justifyActive === 'tab1' ? 'primary' : 'secondary'}>
            Login
          </Button>
        </Col>
        <Col>
          <Button onClick={() => handleJustifyClick('tab2')} variant={justifyActive === 'tab2' ? 'primary' : 'secondary'}>
            Register
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          {justifyActive === 'tab1' ? (
            <div>
              <p className="text-white">Sign in with:</p>

              <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                <Button variant='primary' className='m-1'>
                  <FontAwesomeIcon icon={faFacebookF} size="sm" />
                </Button>

                <Button variant='primary' className='m-1'>
                  <FontAwesomeIcon icon={faTwitter} size="sm" />
                </Button>

                <Button variant='primary' className='m-1'>
                  <FontAwesomeIcon icon={faGoogle} size="sm" />
                </Button>

                <Button variant='primary' className='m-1'>
                  <FontAwesomeIcon icon={faGithub} size="sm" />
                </Button>
              </div>

              <p className="text-white text-center mt-3">or:</p>

              <InputGroup className='mb-4'>
                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                <FormControl type='email' placeholder='Email address' value={email}  onChange={(e) => setEmail(e.target.value)}/>
              </InputGroup>

              <InputGroup className='mb-4'>
                <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                <FormControl type='password' placeholder='Password'value={password} onChange={(e) => setPassword(e.target.value)} />
              </InputGroup>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <FormCheck type='checkbox' id='flexCheckDefault' label='Remember me' className="text-white" />
                <a href="!#" className="text-white">Forgot password?</a>
              </div>

              <Button className="mb-4 w-100" onClick={handleLogin}>Sign in</Button>
              <p className="text-center text-white">Not a member? <a href="#!" className="text-white">Register</a></p>
            </div>
          ) : (
            <div>
              <p className="text-white">Sign un with:</p>

              <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                <Button variant='outline-primary' className='m-1'>
                  <FontAwesomeIcon icon={faFacebookF} size="sm" />
                </Button>

                <Button variant='outline-primary' className='m-1'>
                  <FontAwesomeIcon icon={faTwitter} size="sm" />
                </Button>

                <Button variant='outline-primary' className='m-1'>
                  <FontAwesomeIcon icon={faGoogle} size="sm" />
                </Button>

                <Button variant='outline-primary' className='m-1'>
                  <FontAwesomeIcon icon={faGithub} size="sm" />
                </Button>
              </div>

              <p className="text-white text-center mt-3">or:</p>

              <InputGroup className='mb-4'>
                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                <FormControl type='text' placeholder='Name' />
              </InputGroup>

              <InputGroup className='mb-4'>
                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                <FormControl type='text' placeholder='Username' />
              </InputGroup>

              <InputGroup className='mb-4'>
                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                <FormControl type='email' placeholder='Email' />
              </InputGroup>

              <InputGroup className='mb-4'>
                <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                <FormControl type='password' placeholder='Password' />
              </InputGroup>

              <div className='d-flex justify-content-center mb-4'>
                <FormCheck type='checkbox' id='flexCheckDefault' label='I have read and agree to the terms' className="text-white" />
              </div>

              <Button className="mb-4 w-100">Sign up</Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
