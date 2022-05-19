
import React, { useState } from "react";
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import { toast } from 'react-toastify';



const CDAIncentiveEdit = (props) => {

    const [postUserData, setPostUserData] = useState({
        id: props.data.cDAIncentiveresponse[0].id,
        franchise_cd: props.data.cDAIncentiveresponse[0].franchise_cd,
        incentive_type: props.data.cDAIncentiveresponse[0].incentive_type,
        incentive: props.data.cDAIncentiveresponse[0].incentive,
        effective_from: props.data.cDAIncentiveresponse[0].effective_from,
        effective_upto: props.data.cDAIncentiveresponse[0].effective_upto,
        description: props.data.cDAIncentiveresponse[0].description,
        actv_ind:1,

    });   

    const { id, franchise_cd, incentive_type, incentive, effective_from, effective_upto, description, actv_ind } = postUserData;


    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: name === 'incentive' ?parseInt(value): value });

    }


    const updateUserData = () => {

        const apiAndUrl = 'CDAIncentive/CDAIncentive/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " + id + "incentive Type  = " + incentive_type + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
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
                                        Franchise Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='franchise_cd' value={franchise_cd} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Incentive Type:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <select className="form-control" name='incentive_type' value={incentive_type} onChange={onInputChange} >
                                        <option value="F">Fixed</option>
                                        <option value="P">Percentage</option>


                                    </select>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Incetive:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name='incentive' value={incentive} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Effective From :<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='effective_from' value={effective_from} onChange={onInputChange}/>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Effective Upto:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='effective_upto' value={effective_upto} onChange={onInputChange}/>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Description:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='description' value={description} onChange={onInputChange}/>
                                </div>
                                <div className="col-md-1"></div>
                            </div>


                            <div className="row form-group">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a className="expdbutton btnSearch mr-2" onClick={updateUserData} >Update</a>
                                        <a className="expdbutton btnback mr-2" onClick={props.UpdatePageBackBtn} >Back</a>
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

export default CDAIncentiveEdit;
