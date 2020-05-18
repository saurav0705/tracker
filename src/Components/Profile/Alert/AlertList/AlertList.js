import React from 'react';
import './AlertList.scss';
import {MdDelete,MdPauseCircleFilled} from 'react-icons/md';
import {IoMdPlayCircle} from 'react-icons/io';
import {FaShoppingCart} from 'react-icons/fa';
const AlertList = (props) => {
    let data  = {
        "name":"Real Fruit Juice",
        "price_list":[20,30,40,50,30],
        "alert_price":19,
        "url":"https://www.someurl.comaksdbckabsdkcbksdajckjasbdkcjbsdkjbcksdjcdcjnsdncasndconaslcnlsdnlksdanl",
        "status":"pause"
    }
    const checkStatus = (value) => {
        if (value === "active") return (<span className="pause"><MdPauseCircleFilled/></span>)
        return (<span className="play"><IoMdPlayCircle/></span>)

    }
    return (
        <div className="alert-list">
            {Array(210).fill("something").map( (card,index) => {return (
            <div className="alert-tile" key={index} >
                <div className="title" onClick={() => props.select({...data,id:index})}>{data.name}</div>
                <div className="url" onClick={() => window.open(data.url)}><FaShoppingCart/></div>
            <div className="alert-price">Alert Price : {data.alert_price}</div>
            <div className="actions">
            <div className={data.status}>{data.status}</div>
            <div className="event">{checkStatus(data.status)} 
            <span className="delete"><MdDelete/></span></div>
            </div>
            </div>
            )})}
        </div>
    );
};

export default AlertList;