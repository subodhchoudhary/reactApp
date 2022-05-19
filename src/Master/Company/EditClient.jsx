import React, { useState } from "react";
import { toast } from 'react-toastify';
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import { ArrowDown, ArrowUp } from '../../Images/Icons';


const EditClient = (props) => {

    const [activeBlock, setActiveBlock] = useState('');
    const [addSameAsHomeName, setSameAsHomeName] = useState('');
    const [addSameAsHomeValue, setAddSameAsHomeValue] = useState('');
    //console.log(setPostUserData);
    const [postUserData, setPostUserData] = useState({
        id: props.data.clientResponses[0].id,
        type: props.data.clientResponses[0].type,
        client_cd: props.data.clientResponses[0].client_cd,
        parent_client_cd: props.data.clientResponses[0].parent_client_cd,
        title: props.data.clientResponses[0].title,
        first_nm: props.data.clientResponses[0].first_nm,
        middle_nm: props.data.clientResponses[0].middle_nm,
        last_nm: props.data.clientResponses[0].last_nm,
        full_nm: props.data.clientResponses[0].full_nm,
        dob: props.data.clientResponses[0].dob,
        marital_status: props.data.clientResponses[0].marital_status,
        nationality: props.data.clientResponses[0].nationality,
        occupation_cd: props.data.clientResponses[0].occupation_cd,
        gender: props.data.clientResponses[0].gender,
        email1: props.data.clientResponses[0].email1,
        email2: props.data.clientResponses[0].email2,
        uid: props.data.clientResponses[0].uid,
        
        pan_no: props.data.clientResponses[0].pan_no,
        passport_no: props.data.clientResponses[0].passport_no,
        id_proof: props.data.clientResponses[0].id_proof,
        id_proof_no: props.data.clientResponses[0].id_proof_no,
        company_type: props.data.clientResponses[0].company_type,
        industry_type: props.data.clientResponses[0].industry_type,
        registration_no: props.data.clientResponses[0].registration_no,
        tan_no: props.data.clientResponses[0].tan_no,

       

        contact_person: props.data.clientResponses[0].contact_person,
        contact_telephone_no: props.data.clientResponses[0].contact_telephone_no,
        contact_mobile_no: props.data.clientResponses[0].contact_mobile_no,
        address_line1: props.data.clientResponses[0].address_line1,
        address_line2: props.data.clientResponses[0].address_line2,
        address_line3: props.data.clientResponses[0].address_line3,
        pin_zip: props.data.clientResponses[0].pin_zip,
        mobile1: props.data.clientResponses[0].mobile1,
        mobile2: props.data.clientResponses[0].mobile2,
        mobile3: props.data.clientResponses[0].mobile3,
        landline_no1: props.data.clientResponses[0].landline_no1,
        landline_no2: props.data.clientResponses[0].landline_no2,
        fax_no: props.data.clientResponses[0].fax_no,
        same_as_home: props.data.clientResponses[0].same_as_home,
        mailing_address1: props.data.clientResponses[0].mailing_address1,
        mailing_address2: props.data.clientResponses[0].mailing_address2,
        mailing_address3: props.data.clientResponses[0].mailing_address3,
                                            
        mailing_pin_zip: props.data.clientResponses[0].mailing_pin_zip,
        mailing_mobile1: props.data.clientResponses[0].mailing_mobile1,
        mailing_mobile2: props.data.clientResponses[0].mailing_mobile2,
        mailing_mobile3: props.data.clientResponses[0].mailing_mobile3,
        mailing_landline_no1: props.data.clientResponses[0].mailing_landline_no1,
        mailing_landline_no2: props.data.clientResponses[0].mailing_landline_no2,
        mailing_fax_no: props.data.clientResponses[0].mailing_fax_no,
        start_dt: props.data.clientResponses[0].start_dt,
        end_dt: props.data.clientResponses[0].end_dt,
        annual_income: props.data.clientResponses[0].annual_income,
        contactperson_nm: props.data.clientResponses[0].contactperson_nm,
        contactperson_no: props.data.clientResponses[0].contactperson_no,
        contactperson_email: props.data.clientResponses[0].contactperson_email,
        otp_ind: props.data.clientResponses[0].otp_ind,
        remarks: props.data.clientResponses[0].remarks,
        actv_ind:1,
       

    });

    const {
        id, type, client_cd, parent_client_cd, title, first_nm, middle_nm,
        last_nm, full_nm, dob, marital_status, nationality, occupation_cd, gender, email1, email2, uid, pan_no,
        passport_no, id_proof, id_proof_no, company_type, industry_type, registration_no, tan_no, contact_person, contact_telephone_no,
        contact_mobile_no, address_line1, address_line2, address_line3, pin_zip, mobile1, mobile2, mobile3, landline_no1, landline_no2, fax_no,
        same_as_home, mailing_address1, mailing_address2, mailing_address3, mailing_pin_zip, mailing_mobile1, mailing_mobile2,
        mailing_mobile3, mailing_landline_no1, mailing_landline_no2, mailing_fax_no, start_dt, end_dt, annual_income, contactperson_nm, contactperson_no,
        contactperson_email, otp_ind, remarks, actv_ind
    } = postUserData



    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: name === 'otp_ind' || name ==='type'  ? parseInt(value) : value  });

    }
    const OnMouseHoverBtn = () => {

        setPostUserData({ ...postUserData, [addSameAsHomeName]: addSameAsHomeValue })
    }
   
    const onCheckboxClick = (e) => {
        if (e.target.checked) {
            setSameAsHomeName(e.target.name);
            setAddSameAsHomeValue(e.target.value);
            console.log(e.target.value)
        }
        else {
            setSameAsHomeName(e.target.name);
            setAddSameAsHomeValue('No');
            console.log('No')
        }

    };

    const updateUserData = () => {

        console.log(postUserData);
        const apiAndUrl = 'Client/Client/' + id;

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
                                    <label className="control-label from-txt">
                                        Type:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                    <div className="col-md-3">
                                        <select className="form-control" name='type' onChange={onInputChange}
                                            value={type}>{type === 1 ? 'Individual' : 'Company'}
                                        {/*<option value={type}>{type === 1 ? 'Individual' : 'Company'}</option>*/}
                                        <option value={1}>Individual</option>
                                        <option value={2}>Company</option>

                                    </select>
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Client Code:<span className="text-danger" >*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='client_cd' value={client_cd} onChange={onInputChange} readOnly />
                                    <div className="col-md-1"></div>
                                </div>

                            </div>
                            <div className="row form-group">

                                <div className="col-md-2">
                                    <label className="control-label from-txt">Parent Client Code:</label>
                                </div>

                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='parent_client_cd' value={parent_client_cd} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>


                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Title:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='parent_client_cd' value={title} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        FirstName:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='first_nm' value={first_nm} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        MiddleName:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='middle_nm' value={middle_nm} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        LastName:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='last_nm' value={last_nm} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        FullName:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='full_nm' value={full_nm} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        DOB:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='dob' value={dob} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Material Status:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='marital_status' value={marital_status} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Nationality:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='nationality' value={nationality} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Occupation Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='occupation_cd' value={occupation_cd} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Gender:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                    <div className="col-md-3">
                                        <select className='form-control' name='gender' onChange={onInputChange}
                                            value={gender}>{gender === 'M' ? 'Male' : 'Female'}
                                       
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>

                                    </select>
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Email1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='email1' value={email1} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Email2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='email2' value={email2} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        UID:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='uid' value={uid} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Pan No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='pan_no' value={pan_no} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Passport No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='passport_no' value={passport_no} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        ID Proof:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='id_proof' value={id_proof} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        ID_Proof No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='id_proof_no' value={id_proof_no} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Company Type:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='company_type' value={company_type} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Industry Type:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='industry_type' value={industry_type} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Registration No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='registration_no' value={registration_no} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Tan No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='tan_no' value={tan_no} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Contact Person:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='contact_person' value={contact_person} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Contact Telephone No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='contact_telephone_no' value={contact_telephone_no} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                </div>
                            <div className="row form-group">
                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            otp ind:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-control" name="otp_ind" onChange={onInputChange}
                                            value={otp_ind}>{otp_ind === 1 ? 'Yes' : 'No'}
                                            <option value={1}>Yes</option>
                                        <option value={0}>No</option>

                                        </select>
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Remarks:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name='remarks' value={remarks} onChange={onInputChange} />
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
                                        Contact Mobile No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='contact_mobile_no' value={contact_mobile_no} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Address Line1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='address_line1' value={address_line1} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Address Line2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='address_line2' value={address_line2} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Address Line2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='address_line3' value={address_line3} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Pin Zip:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='pin_zip' value={pin_zip} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mobile1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mobile1' value={mobile1} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mobile2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mobile2' value={mobile2} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mobile3:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mobile3' value={mobile3} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Landline No1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='landline_no1' value={landline_no1} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Landline No2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='landline_no2' value={landline_no2} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Fax No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='fax_no' value={fax_no} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Same As Home:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" name="same_as_home" value='Ye' defaultChecked={same_as_home === 'Ye' ? true : false} onChange={onCheckboxClick} />


                                    </div>
                                </div>

                                <div className="col-md-1"></div>
                            </div>
                            </div>
                        </div>


                        <div className="headingBorder" onClick={() => { onActiveBlockClick('MaillingDetailsBlock') }}>
                            <h2 >Mailling Details{activeBlock === 'MaillingDetailsBlock' ? <ArrowUp /> : <ArrowDown />}</h2>
                        </div>
                        <div className={setActiveBlockClick('MaillingDetailsBlock')}>
                            <div className="x_content">
                                <br />



                           
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing Address1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_address1' value={mailing_address1} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing Address2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_address2' value={mailing_address2} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing Address3:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_address3' value={mailing_address3} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing Pin Zip:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_pin_zip' value={mailing_pin_zip} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing Mobile1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_mobile1' value={mailing_mobile1} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing Mobile2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_mobile2' value={mailing_mobile2} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing Mobile3:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_mobile3' value={mailing_mobile3} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing Landline No1:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_landline_no1' value={mailing_landline_no1} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing Landline No2:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_landline_no2' value={mailing_landline_no2} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Mailing_Fax_No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='mailing_fax_no' value={mailing_fax_no} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Start Date:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='start_dt' value={start_dt} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        End Date:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='end_dt' value={end_dt} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Annual Income:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='annual_income' value={annual_income} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        ContactPerson Name:<span className="text-danger">*</span>
                                    </label>
                                </div>  
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='contactperson_nm' value={contactperson_nm} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        ContactPerson_No:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='contactperson_no' value={contactperson_no} onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        ContactPerson Email:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='contactperson_email' value={contactperson_email} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                         
                            </div>

                        </div>


                        <div className="row" style={{ paddingTop: '25px' }}>
                            <div className="col-md-12 text-center">
                                    <a onClick={updateUserData} onMouseOver={OnMouseHoverBtn} className="expdbutton btnSearch mr-2" > Update </a>
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

export default EditClient;
