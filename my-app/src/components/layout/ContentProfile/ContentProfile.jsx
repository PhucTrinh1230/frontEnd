import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserDataById, GetUserbyID } from '../../../services/userService';
import { Container } from 'react-bootstrap';
import './ContentProfile.css'
import { jwtDecode } from 'jwt-decode';

const ContentProfile = ({ userId }) => {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    const {email} = useParams();
    const {accountId} = useParams()
    
    const [accountDatachange, setAccountData] = useState({
        email: '',
        password: '' 
        
        
      });
    
      
    const [success, setSuccess] = useState(false);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setAccountData({
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await updateAccount(accountId, accountDatachange);
    //         setSuccess(true);
    //         setError(null);
    //     } catch (error) {
    //         setSuccess(false);
    //         setError(error.message);
    //     }
    // };

    useEffect(() => {
        const getData = async () => {
            try {
                const { accountData, userDetailData } = await fetchUserDataById(userId);
                const mergedOneUser = {
                    ...userDetailData,
                    email: accountData.email,
                    rankTypeId: accountData.rankTypeId,
                    accountBalance: accountData.accountBalance,
                    level: accountData.level,
                };
                setUserData(mergedOneUser);

            } catch (error) {
                setError(error.message);
            }
        };
        

        getData();
    }, [userId]);


    
    const decoded = jwtDecode((localStorage.getItem('tokenFromJava')));



    return (
        <div>
          <Container>
            <div className='thongtinaccountpage1' style={{width:'300px'}}>
                 <h5>Profile Page for {email}</h5>
                <br></br>
                Username:  <strong>{decoded.username}</strong>  <br></br><br></br>
                Rank Account: <strong>{decoded.rankAccount.name}</strong><br></br><br></br>
              {/* Account id hien thi len de lay user: <strong>{decoded.accountId}</strong><br></br> */}

                Account Balance: <strong>{decoded.accountBalance}</strong><br></br><br></br>
                Level: <strong>{decoded.level}</strong><br></br>
            </div>
       
        </Container>
       
            {/* <div>

                <h5>Update Account Information</h5>
                <br></br>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {success && <div style={{ color: 'green' }}>Account updated successfully!</div>}
                <form onSubmit={handleSubmit}>
                <div>
      
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={accountDatachange.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="number"
              name="password"
              value={accountDatachange.password}
              onChange={handleChange}
            />
          </label>
        </div>
                   
                    <button type="submit">Update Account</button>
                </form>
            </div> */}
        </div>
    );
};

export default ContentProfile;




