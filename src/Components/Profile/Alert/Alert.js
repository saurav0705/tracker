import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Alert.scss';
import {IoMdAddCircle} from 'react-icons/io';
import AlertList from './AlertList/AlertList';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import {Line} from 'react-chartjs-2';
import {COLORS} from './colors';

const Alert = () => {
    const [selected,setSelected] = useState({price_list : []});
    const [open,setOpen] = useState(false);
    function shuffle(array) {
        return  array.sort(() => Math.random() - 0.5);
       }
    const dataSet={
        labels: Array(selected.price_list.length).fill("price"),
        datasets: [{
            label: 'PRICE',
            data: selected.price_list,
            borderColor: shuffle(COLORS)[0],
            pointBorderColor: shuffle(COLORS)[0],
            pointBackgroundColor: shuffle(COLORS)[0],
            pointHoverBackgroundColor: shuffle(COLORS)[0],
            pointHoverBorderColor: shuffle(COLORS)[0],
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
        }],
        
    }
    const toggle = () => {
        setOpen(!open);
    }
    useEffect(()=>{
        console.log(selected);
    },[selected])
    return (
        <div className="alert">
            <div className="heading">alert</div>
            <div className="add-conatiner">
            <div className="add">add <IoMdAddCircle/></div>
            </div>
            <div className="list">
                <AlertList
                select = {(obj) => {setSelected({...obj});toggle()}}
                />
            </div>
            <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Complete Detail</ModalHeader>
        <ModalBody>
            {selected !== undefined ?<div className="detail"> 
            <div className="title">{selected.name}</div>
            <div className="url" onClick={() => window.open(selected.url)}>{selected.url}</div>
            <div className="price">
                <table>
                <tr className="max"><td>Maximum Price</td><td> {Math.max(...selected.price_list)}</td></tr>
                <tr className="min"><td>Minimum Price</td><td> {Math.min(...selected.price_list)}</td></tr>
                <tr className="alert-price"><td>Alert Price</td><td> {selected.alert_price}</td></tr>   
                </table>
            </div>
            <div className="graph">
            <Line
                data={dataSet}
                width={100}
                height={50}
                options={{}}
            />
            </div>
            </div>:null}
        </ModalBody>
      </Modal>
        </div>
    );
};

export default Alert;