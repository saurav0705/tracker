import React from 'react';
import './Profile.scss';
import UserInfo from './UserInfo/UserInfo';
import Alert from './Alert/Alert';

const Profile = () => {
    
    return (
        <div className="profile">
                <UserInfo/>
                <Alert/>
        
        </div>
    );
};

export default Profile;