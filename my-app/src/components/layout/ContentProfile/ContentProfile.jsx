import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { fetchUserDataById, GetUserbyID } from '../../../services/userService';
import { mergeUserData, fetchUserData, mergeOneUser, updateAccount } from '../../../services/userService';


const ContentProfile = ({ userId }) => {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    
    const accountId =2 
    
    const [accountDatachange, setAccountData] = useState({
        email: 'nguyentrongkhoa@gmail.com',
        password: '12345'
        
        
      });
    

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


    


    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountData({
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateAccount(accountId, accountDatachange);
            setSuccess(true);
            setError(null);
        } catch (error) {
            setSuccess(false);
            setError(error.message);
        }
    };


    return (
        <div>
            <div className='thongtinaccountpage1 p-2 m-2'>
                <h5>Tổng quan</h5>
                <br></br>
                Họ và tên:  <strong>{userData.lastname}</strong>  <strong>{userData.firstname}</strong><br></br>
                Email: <strong>{userData.email}</strong><br></br>
                Rank Type: <strong>{userData.rankTypeId}</strong><br></br>

                Account Balance: <strong>{userData.accountBalance}</strong><br></br>
                Level: <strong>{userData.level}</strong><br></br>
            </div>
            <hr></hr>
            <div>

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
            </div>
        </div>
    );
};

export default ContentProfile;




