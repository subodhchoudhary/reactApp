import React, { useState } from "react";
import { toast } from 'react-toastify';
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import { ArrowDown, ArrowUp } from '../../Images/Icons';

const AgentEdit = (props) => {

    const [activeBlock, setActiveBlock] = useState('');
    const [postUserData, setPostUserData] = useState({
        id: props.data.agentResponses[0].id,
        client_cd: props.data.agentResponses[0].client_cd,
        channel_type_cd: props.data.agentResponses[0].channel_type_cd,
        agent_cd: props.data.agentResponses[0].agent_cd,
        agent_nm: props.data.agentResponses[0].agent_nm,
        agent_type_cd: props.data.agentResponses[0].agent_type_cd,
        unit_type_cd: props.data.agentResponses[0].unit_type_cd,
        parent_agent_cd: props.data.agentResponses[0].parent_agent_cd,
        parent_agent_nm: props.data.agentResponses[0].parent_agent_nm,
        parent_agent_channel_type_cd: props.data.agentResponses[0].parent_agent_channel_type_cd,
        parent_agent_type_cd: props.data.agentResponses[0].parent_agent_type_cd,
        license_no: props.data.agentResponses[0].license_no,
        license_valid_from: props.data.agentResponses[0].license_valid_from,
        license_valid_upto: props.data.agentResponses[0].license_valid_upto,
        mobile_no: props.data.agentResponses[0].mobile_no,
        email: props.data.agentResponses[0].email,
        emergency_contact_nm: props.data.agentResponses[0].emergency_contact_nm,
        emergency_contact_phone_num: props.data.agentResponses[0].emergency_contact_phone_num,
        education_qualification: props.data.agentResponses[0].education_qualification,
        gstin: props.data.agentResponses[0].gstin,
        pan_no: props.data.agentResponses[0].pan_no,
        cancellation_dt: props.data.agentResponses[0].cancellation_dt,
        suspension_dt: props.data.agentResponses[0].suspension_dt,
        revocation_dt: props.data.agentResponses[0].revocation_dt,
        validity_start_dt: props.data.agentResponses[0].validity_start_dt,
        validity_end_dt: props.data.agentResponses[0].validity_end_dt,
        status: props.data.agentResponses[0].status,
        address_line1: props.data.agentResponses[0].address_line1,
        address_line2: props.data.agentResponses[0].address_line2,
        address_line3: props.data.agentResponses[0].address_line3,
        pin_zip: props.data.agentResponses[0].pin_zip,
        mobile1: props.data.agentResponses[0].mobile1,
        mobile2: props.data.agentResponses[0].mobile2,
        mobile3: props.data.agentResponses[0].mobile3,
        landline_no1: props.data.agentResponses[0].landline_no1,
        landline_no2: props.data.agentResponses[0].landline_no2,
        fax_no: props.data.agentResponses[0].fax_no,
        classification: props.data.agentResponses[0].classification,
        remarks: props.data.agentResponses[0].remarks,
        actv_ind:1,
        
    });

    const { id, client_cd, channel_type_cd, agent_cd, agent_nm, agent_type_cd, unit_type_cd, parent_agent_cd, parent_agent_nm, parent_agent_channel_type_cd, parent_agent_type_cd, license_no, license_valid_from, license_valid_upto, mobile_no, email, emergency_contact_nm, emergency_contact_phone_num, education_qualification, gstin, pan_no, cancellation_dt, suspension_dt, revocation_dt, validity_start_dt, validity_end_dt, status, address_line1, address_line2, address_line3, pin_zip, mobile1, mobile2, mobile3, landline_no1, landline_no2, fax_no, classification, remarks, actv_ind } = postUserData;


    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: value });

    }
   



    const updateUserData = () => {

        const apiAndUrl = 'Agent/Agent/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " + id + "Client Code = " + client_cd + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
                props.UpdatePageBackBtn();
            }
            else {
                toast.error("Invalid Enrty", { position: toast.POSITION.TOP_CENTER });
            }
        })
    }

    const onActiveBlockClick = (nameBlock) => {

        setActiveBlock(nameBlock);

        console.log(nameBlock);

    }

    const setActiveBlockClick = (returnName) => {

        const activeBlockClass = activeBlock === returnName ? 'showMeHeading' : 'hideMeHeading';
        return activeBlockClass;
    };

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
                        <div className="headingBorder" onClick={() => { onActiveBlockClick('PersonalDetailsBlock') }} >

                            <h2>Personal Details{activeBlock === 'PersonalDetailsBlock' ? <ArrowUp /> : <ArrowDown />}</h2>
                        </div>
                        <div className={setActiveBlockClick('PersonalDetailsBlock')} >
                            <div className="x_content">
                                <br />
                            <div className="row form-group">

                                <div className="col-md-2">
                                    <label className="control-label from-txt">Agent Code:</label>
                                </div>

                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_cd' value={agent_cd} onChange={onIputChange} readOnly />
                                    <div className="col-md-1"></div>
                                </div>


                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Agent Name:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_nm' value={agent_nm} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Client Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='client_cd' value={client_cd} onChange={onIputChange}  />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Channel Type Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='channel_type_cd' value={channel_type_cd} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                            </div>   
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Agent Type Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_type_cd' value={agent_type_cd} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Unit Type Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='unit_type_cd' value={unit_type_cd} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Parent Agent Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='parent_agent_cd' value={parent_agent_cd} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Parent Agent Name:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='parent_agent_nm' value={parent_agent_nm} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Parent Agent Channel Type Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='parent_agent_channel_type_cd' value={parent_agent_channel_type_cd} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Parent Agent Type Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='parent_agent_type_cd' value={parent_agent_type_cd} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        License No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='license_no' value={license_no} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        License Valid From:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='license_valid_from' value={license_valid_from} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        License Valid Upto:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='license_valid_upto' value={license_valid_upto} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mobile No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mobile_no' value={mobile_no} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Email:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='email' value={email} onChange={onIputChange}
 />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Emergency Contact No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='emergency_contact_nm' value={emergency_contact_nm} onChange={onIputChange}
 />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Emergency Contact Phone No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='emergency_contact_phone_num' value={emergency_contact_phone_num} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Education Qualification:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='education_qualification' value={education_qualification} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        GSTIN:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='gstin' value={gstin} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Pan No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='pan_no' value={pan_no} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Cancellation Date:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='cancellation_dt' value={cancellation_dt} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Suspension Date:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='suspension_dt' value={suspension_dt} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Revocation Date:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='revocation_dt' value={revocation_dt} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Validity Start Ddate:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='validity_start_dt' value={validity_start_dt} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Validity End Date:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='validity_end_dt' value={validity_end_dt} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Status:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='status' value={status} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            </div>
                        </div>
                        <div className="headingBorder" onClick={() => { onActiveBlockClick('AddressDetailsBlock') }}>
                            <h2 >Address Details {activeBlock === 'AddressDetailsBlock' ? <ArrowUp /> : <ArrowDown />}</h2>
                        </div>

                        <div className={setActiveBlockClick('AddressDetailsBlock')}>
                            <div className="x_content">
                                <br />

                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Address Line1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='address_line1' value={address_line1} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Address Line2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='address_line2' value={address_line2} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Address Line3:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='address_line3' value={address_line3} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Pin Zip:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='pin_zip' value={pin_zip} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mobile1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mobile1' value={mobile1} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mobile2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mobile2' value={mobile2} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mobile3:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mobile3' value={mobile3} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Landline No1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='landline_no1' value={landline_no1} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Landline No2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='landline_no2' value={landline_no2} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Fax No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='fax_no' value={fax_no } onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Classification:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='classification' value={classification } onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Remark:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='remarks' value={remarks} onChange={onIputChange} />
                                </div>
                                </div>
                            </div>
                            </div>
                                <div className="row" style={{ paddingTop: '25px' }}>
                                    <div className="col-md-12 text-center">
                                    <a onClick={updateUserData} className="expdbutton btnSearch mr-2" > Update </a>
                                        <a className="expdbutton btnback mr-2" onClick={props.UpdatePageBackBtn} >Back</a>
                                        <div className="x_content">
                                            <br />
                                        </div>
                                </div>
                            </div>
                       


                        </div>
                    </div>
                </div>
           
           
        </>
    );
}

export default AgentEdit;
