import React from 'react';
import './UserInfo.scss';
import {IoMdCloseCircle} from 'react-icons/io';
const UserInfo = () => {
    const close = () => {
        document.querySelector(".userInfo").style.width = "0";

    }
    return (
        <div className="userInfo">
            <div className="close" onClick={() => close()}><IoMdCloseCircle/></div>
            <div className="heading">user Info</div>
            <div className="image-container">
                <img src="https://drive.google.com/uc?id=10QFET3vVxDFZdSUaL0IfXILS53tL3Nfc"/>
            </div>
            <div className="name">Saurav Aggarwal</div>
            <div className="email">sauravaggarwal98@gmail.com</div>
            <div className="alerts">
                <div className="status">Alert stats</div>
            <table>
            <tr className="total"> <td>Total </td> <td>5</td></tr>
            <tr className="active"> <td>Active </td> <td>3</td></tr>
            <tr className="closed"> <td>paused </td> <td>2</td></tr> 
            </table>
            </div>
            <div className="delete">
                delete account
            </div>
            
        </div>
    );
};

export default UserInfo;