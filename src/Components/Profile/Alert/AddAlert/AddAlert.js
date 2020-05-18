import React from 'react';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddAlert.scss';

const AddAlert = (props) => {
    return (
        <>
            <Modal isOpen={props.open} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Add Alert</ModalHeader>
        <ModalBody>
            <div className="add-data"> 
            <table>
                <tr>
                    <td className="label">url</td>
                    <td><input type="url"/></td>
                </tr>
                <tr>
                    <td className="label">alert price</td>
                    <td><input type="number"/></td>
                </tr>
            </table>
            <button className="btn-ok">ok</button>
            </div>
        </ModalBody>
      </Modal>
            
        </>
    );
};

export default AddAlert;