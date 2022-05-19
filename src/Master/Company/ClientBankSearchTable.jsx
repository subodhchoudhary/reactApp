import React from "react";
import { toast } from 'react-toastify';
import $ from 'jquery';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";

import { deleteFunction } from '../../Service/CrudOperation';

const ClientBankSearchTable = (props) => {
    $(() => {
        $(".DataTbl").DataTable();
    });

    const deleteUserDataById = (id, bank_nm) => {
        const apiAndId = 'ClientBanks/ClientBanks/' + id

        if (window.confirm("Are You Sure Want To Delete")) {

            const returnStatus = deleteFunction(apiAndId);
            returnStatus.then((returnSt) => {
                if (returnSt === 200) {
                    toast.success("Id = " + id + "Bank Name Code = " + bank_nm + " is Deleted", { position: toast.POSITION.TOP_CENTER });
                }
            })


        }




    };

    const updateUserDataById = (id) => {

        props.UpdateClienBanktDataFun('ClientBanks/ClientBanks?id=' + id)
    }

    const ViewUSerData = (id) => {
        props.ViewClientBankBtnFunction('ClientBanks/ClientBanks?id=' + id);
    }
    return (
        <>

            <div id="page-wrapper" className="page-wrapper-cls">
                <div id="page-inner" className="mt-3 px-6 py-6">

                    <div className="clearfix"></div>
                    <div className="x_panel boxshadow">
                        <div className="form-group" id="">
                            <div className="form-group x_content">
                                <table className="display w-100 DataTbl">
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Bank_Nm</th>
                                            <th>Bank_Branch</th>
                                            <th>Account_Type</th>
                                            <th>Account_No</th>
                                            <th>Ifsc_Cd</th>
                                            <th>Micr_Cd</th>
                                            <th>Swift_Cd</th>
                                            <th>Edit</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.data.clientBankResponses.map(
                                                propsUserData => (

                                                    <tr key={propsUserData.id}>
                                                        <td>{propsUserData.type}</td>
                                                        <td>{propsUserData.bank_nm}</td>
                                                        <td>{propsUserData.bank_branch}</td>
                                                        <td>{propsUserData.account_type}</td>
                                                        <td>{propsUserData.account_no}</td>
                                                        <td>{propsUserData.ifsc_cd}</td>
                                                        <td>{propsUserData.micr_cd}</td>
                                                        <td>{propsUserData.swift_cd}</td>

                                                        <td>
                                                            <a onClick={() => updateUserDataById(propsUserData.id)}>
                                                                <i class="fa fa-edit fa-2x"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a onClick={() => ViewUSerData(propsUserData.id)}>
                                                                <i class="fa fa-eye fa-2x"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a onClick={() => deleteUserDataById(propsUserData.id, propsUserData.bank_nm)}>
                                                                <i class="fa fa-trash fa-2x"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default ClientBankSearchTable;
