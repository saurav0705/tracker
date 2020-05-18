import React,{useState} from 'react';
import './Alert.scss';
import {IoMdAddCircle} from 'react-icons/io';
import AlertList from './AlertList/AlertList';
import AlertDetail from './AlertDetail/AlertDetail';
import AddAlert from './AddAlert/AddAlert';

const Alert = () => {
    const [selected,setSelected] = useState({price_list : []});
    const [open,setOpen] = useState(false);
    const [open2,setOpen2] = useState(false);
    const toggle = (val) => {
        if(val===1){setOpen(!open);}else{setOpen2(!open2)}
        
    }
    return (
        <div className="alert">
            <div className="heading">alert</div>
            <div className="add-conatiner">
            <div className="add" onClick={() => toggle(2)}>add <IoMdAddCircle/></div>
            </div>
            <div className="list">
                <AlertList
                select = {(obj) => {setSelected({...obj});toggle(1)}}
                />
            </div>
      <AlertDetail
        open={open}
        toggle={() => toggle(1)}
        selected={selected}
      />
      <AddAlert
      open={open2}
      toggle={() => toggle(2)}
      />
        </div>
    );
};

export default Alert;