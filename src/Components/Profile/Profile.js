import React from 'react';
import './Profile.scss';
import UserInfo from './UserInfo/UserInfo';
import Alert from './Alert/Alert';
import {FaBars} from 'react-icons/fa';
const Profile = () => {
    const open = () => {
        document.querySelector(".userInfo").style.width = "100%";

    }
    return (
        <div className="profile">
                <UserInfo/>
                <div className="open-btn" onClick={() => open()}><FaBars/></div>
                <Alert/>
        
        </div>
    );
};

export default Profile;