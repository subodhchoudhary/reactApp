import React from 'react';
import './ViewPopUp.css';

const ViewPopUp = (props) => {
   
    return (
        <div className='bodyProperty'>
            <div className='popUp'>
                <div className='popUpName'>
                    <label>{props.popUpheaderName}</label>
                    <button className="close" onClick={props.ViewPopUpCloseBtnFunction}>&times;</button>
                </div>
                <div className='messageAlert'>
                    {props.children}
                </div>
                <div className='messageAlertDivBtns'>

                    <button className='messageAlertBtnClose' onClick={props.ViewPopUpCloseBtnFunction}>Close</button>
                    
                </div>
            </div>
           
        </div>
    );
};
export default ViewPopUp;