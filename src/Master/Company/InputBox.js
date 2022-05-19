// JavaScript source code
import React from 'react';
import { useState, forwardRef, useRef, useImperativeHandle  } from 'react';
import './InputBox.css';


const MyInputBox = forwardRef((props, ref) => {
    let inputValue = props.MyInputValue;
    let setInputValue = 'set' + props.MyInputValue;
    const autoFocustrue = props.autoFocusTrue.match("true") ? true : false;    
    [inputValue, setInputValue] = useState('');

    useImperativeHandle(ref, () => ({
        returnMyValue() {
            return inputValue;
        },
        getMyParentValue(getValue) {
            setInputValue(getValue);
        },
    }));
    // Handling the email change
    const handleInputValue = (e) => {
        setInputValue(e.target.value);

        /*setSubmitted(false);*/
    };

    return (

        <input onChange={handleInputValue} className="inputBox"
            value={inputValue} type="text" autoFocus={autoFocustrue} / >
    );
});

const MyEmailInputBoxLowerCase = forwardRef((props, ref) => {

    let inputValue = props.MyInputValue;
    let setInputValue = 'set' + props.MyInputValue;
    const autoFocustrue = props.autoFocusTrue.match("true") ? true : false;
    [inputValue, setInputValue] = useState('');

    useImperativeHandle(ref, () => ({
        returnMyValue() {
            return inputValue;
        },
        getMyParentValue(getValue) {
            setInputValue(getValue);
        },
    }));
    // Handling the Value of invalid Entry
    const [ValidInput, setValidInput] = useState('inputBox');
    const [ShowAlertText, setShowAlertText] = useState('');

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Handling the email change
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
        // Alert Text 

        let Alerttext = inputValue.match(mailformat)? '' : 'InValid Email';
        setShowAlertText(Alerttext);        
    };
    const Inputonfocusout = (e) => {
        setInputValue(e.target.value.toLowerCase());
        
        //for invalid alert  
        let x = inputValue.match(mailformat) ? 'inputBox' : ValidInput + ' invalidAlert';
        setValidInput(x);
    };

    return (
        <>
            <input onChange={handleInputValue} onBlur={Inputonfocusout} className={ValidInput}
                value={inputValue} type="email" autoFocus={autoFocustrue}/><br />
            <span className='alertme'>{ShowAlertText}</span>
        </>
    );
});

const MyInputBoxUpperCase = forwardRef((props, ref) => {

    let inputValue = props.MyInputValue;
    let setInputValue = 'set' + props.MyInputValue;

    const autoFocustrue = props.autoFocusTrue.match("true") ? true : false;
    [inputValue, setInputValue] = useState('');


    useImperativeHandle(ref, () => ({
        returnMyValue() {
            return inputValue;
        },
        getMyParentValue(getValue) {
            setInputValue(getValue);
        },
    }));
    // Handling the email change
    const handleInputValue = (e) => {
        setInputValue(e.target.value);

        /*setSubmitted(false);*/
    };
    const Inputonfocusout = (e) => {
        setInputValue(e.target.value.toUpperCase());
    };

    return (

        <input onChange={handleInputValue} onBlur={Inputonfocusout} className="inputBox"
            value={inputValue} type="text" autoFocus={autoFocustrue} />
    );   

});

const MyInputNumberBox = forwardRef((props, ref) => {

    let inputValue = props.MyInputValue;
    let setInputValue = 'set' + props.MyInputValue;
    const autoFocustrue = props.autoFocusTrue.match("true") ? true : false;
    [inputValue, setInputValue] = useState('');

    useImperativeHandle(ref, () => ({
        returnMyValue() {
            return inputValue;
        },
        getMyParentValue(getValue) {
            setInputValue(getValue);
        },
    }));
    // Handling the Value of invalid Entry
    const [ValidInput, setValidInput] = useState('inputBox');

    const [ShowAlertText, setShowAlertText] = useState('');
    // Handling the Value change
    const handleInputValue = (e) => {
        setInputValue(e.target.value);

        // Alert Text 
        let Alerttext = Number.isInteger(Number(inputValue)) ? '' : 'Please Enter Numeric Value';
        setShowAlertText(Alerttext);
    };

    const Inputonfocusout = (e) => {
        //for invalid alert  
        let x = Number.isInteger(Number(inputValue)) ? 'inputBox' : ValidInput + ' invalidAlert';
        setValidInput(x);

    };

    return (
        <>
            <input onChange={handleInputValue} onBlur={Inputonfocusout} className={ValidInput}
                value={inputValue} type="text" autoFocus={autoFocustrue} /><br />
            <span className='alertme'>{ShowAlertText}</span>
        </>
    );
});

const MyInputMobileNumberBox = forwardRef((props, ref) => {

    let inputValue = props.MyInputValue;
    let setInputValue = 'set' + props.MyInputValue;
    const autoFocustrue = props.autoFocusTrue.match("true") ? true : false;
    [inputValue, setInputValue] = useState('');

    // Handling the Value of invalid Entry
    const [ValidInput, setValidInput] = useState('inputBox');

    const [ShowAlertText, setShowAlertText] = useState('');

    useImperativeHandle(ref, () => ({
        returnMyValue() {
            return inputValue;
        },
        getMyParentValue(getValue) {
            setInputValue(getValue);
        },
    }));
    // Handling the Value change
    const handleInputValue = (e) => {
        setInputValue(e.target.value);

        // Alert Text 
        let Alerttext = Number.isInteger(Number(inputValue)) ? '' : 'Please Enter Valid Mob No';
        setShowAlertText(Alerttext);
    };

    const Inputonfocusout = (e) => {
        //for invalid alert  
        let x = Number.isInteger(Number(inputValue)) ? 'inputBox' : ValidInput + ' invalidAlert';
        setValidInput(x);

    };
    return (
        <>
            <input onChange={handleInputValue} onBlur={Inputonfocusout} className={ValidInput}
                value={inputValue} type="text" maxLength="12" autoFocus={autoFocustrue}/><br />
            <span className='alertme'>{ShowAlertText}</span>
        </>

    );
});

const MyInputDateBox = forwardRef((props, ref) => {
    let inputValue = props.MyInputValue;
    let setInputValue = 'set' + props.MyInputValue;
    const autoFocustrue = props.autoFocusTrue.match("true") ? true : false;
    [inputValue, setInputValue] = useState('');

    useImperativeHandle(ref, () => ({
        returnMyValue() {
            return inputValue;
        },
        getMyParentValue(getValue) {
            setInputValue(getValue);
        },
    }));
    const Cdate = new Date().toISOString().substring(0, 10);  /*.toLocaleDateString()*/
    
    // Handling the email change
    const handleInputValue = (e) => {
        setInputValue(e.target.value);

        /*setSubmitted(false);*/
    }   
    return (
      <>
            <input onChange={handleInputValue} className="inputBox"
                value={inputValue} type="date" max={Cdate} autoFocus={autoFocustrue}/>
            
        </>
    );
    
});

const GetMyInputValueBox = forwardRef((props, ref) => {
    let inputValue = props.MyInputValue;
    let setInputValue = 'set' + props.MyInputValue;
    const autoFocustrue = props.autoFocusTrue.match("true") ? true : false;
    [inputValue, setInputValue] = useState(inputValue);

    useImperativeHandle(ref, () => ({
        returnMyValue() {
            return inputValue;
        },
        getMyParentValue(getValue) {
            setInputValue(getValue);
        },
    }));
    // Handling the email change
    const handleInputValue = (e) => {
        setInputValue(e.target.value);

        /*setSubmitted(false);*/
    };

    return (

        <input onChange={handleInputValue} className="inputBox"
            value={inputValue} type="text" autoFocus={autoFocustrue} disabled/>
    );
});

export { MyInputBox, MyEmailInputBoxLowerCase, MyInputBoxUpperCase, MyInputNumberBox, MyInputMobileNumberBox, MyInputDateBox, GetMyInputValueBox };

