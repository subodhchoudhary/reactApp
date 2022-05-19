import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';
import { ArrowDown, ArrowUp } from '../../Images/Icons';



function AddClient(props) {
    const [activeBlock, setActiveBlock] = useState('');

    const [addTypeName, setTypeName] = useState('');
    const [addTypeValue, setAddtypeValue] = useState('');

    const [addOtpName, setOtpName] = useState('');
    const [addOtpValue, setAddOtpValue] = useState('');

    const [addSameAsHomeName, setSameAsHomeName] = useState('');
    const [addSameAsHomeValue, setAddSameAsHomeValue] = useState('');


    const [PostAddClientData, setPostAddClientData] = useState(
        {
            type: 1,
            client_cd: "C",
            parent_client_cd: "",
            title: "",
            first_nm: "",
            middle_nm: "",
            last_nm: "",
            full_nm: "",
            dob: null,
            marital_status: "",
            nationality: "",
            occupation_cd: "",
            gender: "M",
            email1: "",
            email2: "",
            uid: "",
            pan_no: "",
            passport_no: "",
            id_proof: "",
            id_proof_no: "",
            company_type: "",
            industry_type: "",
            registration_no: "",
            tan_no: "",
            contact_person: "",
            contact_telephone_no: "",
            contact_mobile_no: "",
            address_line1: "",
            address_line2: "",
            address_line3: "",
            pin_zip: "",
            mobile1: "",
            mobile2: "",
            mobile3: "",
            landline_no1: "",
            landline_no2: "",
            fax_no: "",
            same_as_home: "NO",
            mailing_address1: "",
            mailing_address2: "",
            mailing_address3: "",
            mailing_pin_zip: "",
            mailing_mobile1: "",
            mailing_mobile2: "",
            mailing_mobile3: "",
            mailing_landline_no1: "",
            mailing_landline_no2: "",
            mailing_fax_no: "",
            start_dt: null,
            end_dt: null,
            annual_income: "",
            contactperson_nm: "",
            contactperson_no: "",
            contactperson_email: "",
            otp_ind: 1,
            remarks: ""

        }

    );

    const onInputIntTypeValue = (e) => {
        const name = e.target.name;
        const value = parseInt(e.target.value);

        console.log(name + '    ' + value);
        setTypeName(name);
        setAddtypeValue(value);
    }

    


    const onCheckboxClick = (e) => {
        if (e.target.checked) {
            setSameAsHomeName(e.target.name);
            setAddSameAsHomeValue(e.target.value);
            console.log(e.target.value)
        }
        else {
            setSameAsHomeName(e.target.name);
            setAddSameAsHomeValue('N');
            console.log('No')
        }

    };

    const onMouseHoverBtn = () => {

        setPostAddClientData({ ...PostAddClientData, [addOtpName]: addOtpValue, [addSameAsHomeName]: addSameAsHomeValue });

    }

    const onInputchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + '   ' + value)
        setPostAddClientData({ ...PostAddClientData, [name]: name === 'type' || name === 'otp_ind' ? parseInt(value): value });
    }


    const AddClientData = () => {
        const path = "Client/Client";

        const myReturnResData = AddUserFunction(path, PostAddClientData)

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
                                            <h2 >Customer Details</h2>
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
                                        <select className="form-control" name="type" onChange={onInputchange} >
                                            <option value={1}>Individual</option>
                                            <option value={2}>Company</option>


                                        </select>
                                        <div className="col-md-1"></div>
                                    </div>
                                </div>
                                <div className="row form-group">

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">Parent Client Code:</label>
                                    </div>

                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="parent_client_cd" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>


                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Title:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="title" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="first_nm" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            MiddleName:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="middle_nm" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="last_nm" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            FullName:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="full_nm" onChange={onInputchange} />
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
                                        <input type="date" className="form-control" name="dob" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Material Status:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="marital_status" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="nationality" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Occupation Code:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="occupation_cd" onChange={onInputchange} />
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
                                        <select className="form-control" name="gender" onChange={onInputchange} >
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
                                        <input type="text" className="form-control" name="email1" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="email2" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            UID:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="uid" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="pan_no" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Passport No:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="passport_no" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="id_proof" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            ID_Proof No:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="id_proof_no" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="company_type" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Industry Type:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="industry_type" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="registration_no" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Tan No:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="tan_no" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="contact_person" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Contact Telephone No:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="contact_telephone_no" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="annual_income" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            ContactPerson No:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="contactperson_no" onChange={onInputchange} />
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
                                        <input type="date" className="form-control" name="start_dt" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            End Date:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="date" className="form-control" name="end_dt" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="contactperson_nm" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            ContactPerson Email:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="contactperson_email" onChange={onInputchange} />
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
                                        <select className="form-control" name="otp_ind"  onChange={onInputchange} >
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>

                                        </select>
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Remarks:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="remarks" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="contact_mobile_no" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Address Line1:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="address_line1" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="address_line2" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Address Line3:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="address_line3" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="pin_zip" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Mobile1:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="mobile1" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="mobile2" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Mobile3:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="mobile3" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="landline_no1" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Landline No2:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="landline_no2" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="fax_no" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Same As Home:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" name="same_as_home" value='Y' onChange={onCheckboxClick} />


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
                                        <input type="text" className="form-control" name="mailing_address1" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Mailing Address2:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="mailing_address2" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="mailing_address3" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Mailing Pin Zip:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="mailing_pin_zip" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="mailing_mobile1" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Mailing Mobile2:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="mailing_mobile2" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="mailing_mobile3" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Mailing Landline No1:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="mailing_landline_no1" onChange={onInputchange} />
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
                                        <input type="text" className="form-control" name="mailing_landline_no2" onChange={onInputchange} />
                                        <div className="col-md-1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Mailing_Fax_No:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name="mailing_fax_no" onChange={onInputchange} />
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>

                            </div>

                        </div>
                        <div className="row" style={{ paddingTop: '25px' }}>
                            <div className="col-md-12 text-center">
                                <a onClick={AddClientData} onMouseOver={onMouseHoverBtn} className="expdbutton btnSearch mr-2">
                                    Add
                                </a>
                                <a className="expdbutton btnback mr-2" onClick={props.AddClientBackBtn} >
                                    Back
                                </a>
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

export default AddClient;
