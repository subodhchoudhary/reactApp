import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';

function AddSubProgram(props) {


    const [PostAddSubProgramData, setPostAddSubProgramData] = useState(
        {

            program_id: 0,
            subprogram_cd: "SP",
            subprogram: "",
            remarks: "",
        }

    );

    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostAddSubProgramData({ ...PostAddSubProgramData, [name]: name === 'program_id' ? parseInt(value) : value });

    }

    const AddSubProgramData = () => {

        const path = "SubProgram/SubProgram";

        const myReturnResData = AddUserFunction(path, PostAddSubProgramData)

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
                                        Program Id:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name="program_id" onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Subprogram :<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name="subprogram" onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Remarks:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name="remarks" onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a onClick={AddSubProgramData} className="expdbutton btnSearch mr-2" >
                                            Add
                                        </a>
                                        <a onClick={props.AddSubProgramBackBtn} className="expdbutton btnback mr-2" >
                                            Back
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AddSubProgram;
