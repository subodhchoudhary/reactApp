import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';


function AddProgramCategory(props) {


    const [postProgramCategoryData, setpostProgramCategoryData] = useState(
        {
            category_cd: "C",
            program_id: 0,
            subprogram_id: 0,
            category: "",
            remarks: ""
           
        }
    );




    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + '   ' + value)
        setpostProgramCategoryData({ ...postProgramCategoryData, [name]: name === 'program_id' || name === 'subprogram_id' || name === 'category_id' || name === 'target_value' ? parseInt(value) : value });


    }

    const AddProgramCategory = () => {

        const path = "ProgramCategory/ProgramCategory";

        const myReturnResData = AddUserFunction(path, postProgramCategoryData)

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
                                        Program Id :<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name="program_id" onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Category: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name="category" onChange={onInputChange} />
                                </div>

                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> SubProgram Id: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name="subprogram_id" onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> Remarks: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name="remarks" onChange={onInputChange} />
                                </div>
                            </div>
                           
                           
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <a
                                        type="submit"
                                        name=""
                                        onClick={AddProgramCategory}
                                        id=""
                                        className="expdbutton btnSearch mr-2"
                                        to="/SearchTableProgramCategory"
                                    >
                                        Submit
                                    </a>
                                    <a className="expdbutton btnback mr-2" onClick={props.AddProgramCategoryBackBtn} >
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

export default AddProgramCategory;
