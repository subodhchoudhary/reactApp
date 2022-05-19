import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';


function AddCampaign(props) {
    

    const [postCampaignData, setpostCampaignData] = useState(
        {
            program_id: 0,
            subprogram_id: 0,
            category_id: 0,
            target_type: "",
            target_unit: "",
            target_value: 0,
            effective_from: null,
            effective_upto: null,
            remarks: ""
        }
    );

   
   

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + '   ' + value)
        setpostCampaignData({ ...postCampaignData, [name]: name === 'program_id' || name === 'subprogram_id' || name === 'category_id' || name === 'target_value' ? parseInt(value) : value });


    }

    const AddCampaign = () => {

        const path = "Campaign/Campaign";

        const myReturnResData = AddUserFunction(path, postCampaignData)

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
                                    <label className="control-label from-txt">
                                        Subprogram Id:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name="subprogram_id" onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Category Id: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name="category_id" onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Target Type: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name="target_type" onChange={onInputChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> Target Unit: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name="target_unit" onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Target Value: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name="target_value" onChange={onInputChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> Effective From: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name="effective_from" onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> Effective Upto: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name="effective_upto" onChange={onInputChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> remarks: <span className="text-danger">*</span></label>
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
                                        onClick={AddCampaign}
                                            id=""
                                            className="expdbutton btnSearch mr-2"
                                            to="/SearchTableCampaign"
                                        >
                                            Submit
                                    </a>
                                    <a className="expdbutton btnback mr-2" onClick={props.AddCampaignBackBtn} >
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

export default AddCampaign;
