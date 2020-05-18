import React from 'react';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Line} from 'react-chartjs-2';
import {COLORS} from '../colors';
import './AlertDetail.scss';

const AlertDetail = (props) => {
    function shuffle(array) {
        return  array.sort(() => Math.random() - 0.5);
       }
    const dataSet={
        labels: Array(props.selected.price_list.length).fill("price"),
        datasets: [{
            label: 'PRICE',
            data: props.selected.price_list,
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
    return (
        <>
            <Modal isOpen={props.open} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Complete Detail</ModalHeader>
        <ModalBody>
            {props.selected !== undefined ?<div className="detail"> 
            <div className="title">{props.selected.name}</div>
            <div className="url" onClick={() => window.open(props.selected.url)}>{props.selected.url}</div>
            <div className="price">
                <table>
                <tr className="max"><td>Maximum Price</td><td> {Math.max(...props.selected.price_list)}</td></tr>
                <tr className="min"><td>Minimum Price</td><td> {Math.min(...props.selected.price_list)}</td></tr>
                <tr className="alert-price"><td>Alert Price</td><td> {props.selected.alert_price}</td></tr>   
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
        </>
    );
};

export default AlertDetail;