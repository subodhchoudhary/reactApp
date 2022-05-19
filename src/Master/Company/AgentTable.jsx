import React from "react";
import { toast } from 'react-toastify';
import $ from 'jquery';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";

import { deleteFunction } from '../../Service/CrudOperation';

const UnitSearchTable = (props) => {
    $(() => {
        $(".DataTbl").DataTable();
    });

    const deleteUnitDataById = (id, client_cd) => {
        const apiAndId = 'Agent/Agent/' + id

        if (window.confirm("Are You Sure Want To Delete")) {

            const returnStatus = deleteFunction(apiAndId);
            returnStatus.then((returnSt) => {
                if (returnSt === 200) {
                    toast.success("Id = " + id + "Client Code = " + client_cd + " is Deleted", { position: toast.POSITION.TOP_CENTER });
                }
            })


        }




    };

    const updateUserDataById = (id) => {

        props.UpdateAgentDataFun('Agent/Agent?id=' + id)
    }

    const ViewUSerData = (id) => {
        props.ViewAgentBtnFunction('Agent/Agent?id=' + id);
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
                                            <th>Agent Name</th>
                                            <th>Parent Agent Name</th>
                                            <th>Mobile No</th>
                                            <th>Email</th>
                                            <th>Emergancy Contact No.</th>
                                            <th>Status</th>
                                            <th>Address</th>
                                            <th>Remark</th>
                                            
                                            <th>Edit</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            props.data.agentResponses.map(
                                                propsUserData => (

                                                    <tr key={propsUserData.id}>
                                                        <td>{propsUserData.agent_nm}</td>
                                                        <td>{propsUserData.parent_agent_nm}</td>
                                                        <td>{propsUserData.mobile_no}</td>
                                                        <td>{propsUserData.email}</td>
                                                        <td>{propsUserData.emergency_contact_nm}</td>
                                                        <td>{propsUserData.status}</td>
                                                        <td>{propsUserData.address_line1}</td>
                                                        <td>{propsUserData.remarks}</td>
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
                                                            <a onClick={() => deleteUnitDataById(propsUserData.id, propsUserData.unit_type_cd)}>
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
};
export default UnitSearchTable;
