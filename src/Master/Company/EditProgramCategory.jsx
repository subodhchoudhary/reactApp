import React, { useState } from "react";
import { toast } from 'react-toastify';
import { UpdateUserDataFunction } from '../../Service/CrudOperation';




const EditProgramCategory = (props) => {


    const [postUserData, setPostUserData] = useState({
        id: props.data.programCategoryResponses[0].id,
        category_cd: props.data.programCategoryResponses[0].category_cd,
        program_id: props.data.programCategoryResponses[0].program_id,
        subprogram_id: props.data.programCategoryResponses[0].subprogram_id,
        category: props.data.programCategoryResponses[0].category,
        remarks: props.data.programCategoryResponses[0].remarks,
        actv_ind: 1,

    });

    const { id, category_cd, program_id, subprogram_id, category, remarks, actv_ind } = postUserData;


    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: name === 'program_id' || name === 'subprogram_id' ? parseInt(value) : value });

    }



    const updateUserData = () => {

        const apiAndUrl = 'ProgramCategory/ProgramCategory/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " + id + "Program Id Code = " + program_id + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
                props.UpdatePageBackBtn();
            }
            else {
                toast.error("Invalid Enrty", { position: toast.POSITION.TOP_CENTER });
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
                                        Category Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name="category_cd" value={category_cd} onChange={onInputChange} readOnly />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Program Id ::<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name="program_id" value={program_id} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> SubProgram Id: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name="subprogram_id" value={subprogram_id} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Category: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name="category" value={category} onChange={onInputChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> Remarks: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name="remarks" value={remarks} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>

                            </div>

                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <a onClick={updateUserData} className="expdbutton btnSearch mr-2" > Update </a>
                                    <a className="expdbutton btnback mr-2" onClick={props.UpdatePageBackBtn} >Back</a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>


        </>
    );
};

export default EditProgramCategory;
