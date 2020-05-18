import React from 'react';
import './Navbar.scss';
import {FaBars} from 'react-icons/fa';
import GoogleLogin from 'react-google-login';
import {FaGoogle} from 'react-icons/fa';
const Navbar = () => {
    const open = () => {
        document.querySelector(".userInfo").style.width = "100%";
    }
    const responseGoogleSuccess = (response) => {
        delete response.profileObj.givenName;
        delete response.profileObj.familyName;
        console.log(response.profileObj);
      }

      const responseGoogleFailure = (response) => {
          console.log(response);
      }
    return (
        <div className="nav">
            <div className="nav-item">
                <span className="open-btn" onClick={() => open()}><FaBars/></span>
            Price Tracker</div>
            <div className="nav-item login">
            <GoogleLogin
                clientId="255100707954-aee67de88i6541djv6k90abdcscmm941.apps.googleusercontent.com"
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}><FaGoogle/> Login</button>
                  )}
                buttonText="Login"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFailure}
                cookiePolicy={'single_host_origin'}
            />
            </div>
            
        </div>
    );
};

export default Navbar;