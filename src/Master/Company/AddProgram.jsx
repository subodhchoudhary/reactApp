import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';



function AddProgram(props) {

    const [userData, getUserData] = useState([]);

    const [program_rankName, setprogram_rankName] = useState('');
    const [program_rankValue, setprogram_rankValue] = useState('');

    const [postProgram, setpostProgram] = useState(
        {
            Program_Code: 'U',
            Program: '',
            remarks:''
            
        }
    );

   
    const OnMouseHoverBtn = () => {
        setpostProgram({ ...postProgram, [program_rankName]: program_rankValue })
    }

    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setpostProgram({ ...postProgram, [name]: value });


    }


    const AddProgram = () => {

        const path = "Program/Program";

        const myReturnResData = AddUserFunction(path, postProgram)

        myReturnResData.then((result) => {

            if (result.returnStatus === 400) {

                var Errors = '';
                for (var i = 0; i <= result.returnData.errorObj.length - 1; i++) {
                    Errors = Errors + '(' + (i + 1) + ')' + result.returnData.errorObj[i].errorMessage;
                }
                toast.error(Errors, { position: toast.POSITION.TOP_CENTER });
            }
            else if (result.returnStatus === 200) {
                toast.success('Successfully Added', { position: toast.POSITION.TOP_CENTER });
            }
        })



    }



    return (
        <>

            <div id="page-wrapper" className="page-wrapper-cls">
                <div id="page-inner" className="mt-3 px-6 py-6">
                    <div className="x_panel boxshadow">
                        <div className="x_title">
                            <div className="row">
                                <div className="top-head">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slope">
                                            <h2>Customer Details</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <br />

                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                    Program:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='Program' onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Remarks:</label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='remarks' onChange={onIputChange} />
                                </div>

                            </div>
                            
                                 <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a onClick={AddProgram} onMouseOver={OnMouseHoverBtn} className="expdbutton btnSearch mr-2">
                                           Submit
                                        </a>
                                        <a className="expdbutton btnback mr-2" onClick={props.AddProgramBackBtn} >
                                            Back
                                        </a>
                                    </div>
                                </div>
                            


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AddProgram;
