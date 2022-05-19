import React from "react";
import { toast } from 'react-toastify';
import { deleteFunction } from '../../Service/CrudOperation';
import $ from 'jquery';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


function CDAIncentiveTable(props) {
    $(() => {
        $(".DataTbl").DataTable();
    });

    const deleteUserDataById = (id, agent_type_cd) => {
        const apiAndId = 'User/User/' + id

        if (window.confirm("Are You Sure Want To Delete")) {

            const returnStatus = deleteFunction(apiAndId);
            returnStatus.then((returnSt) => {
                if (returnSt === 200) {
                    toast.success("Id = " + id + "channel Type Code = " + agent_type_cd + " is Deleted", { position: toast.POSITION.TOP_CENTER });
                }
            })


        }




    };

    const updateUserDataById = (id) => {

        props.UpdateUserTab9DataFun('User/User?id=' + id)
    }

    const ViewUSerData = (id) => {
        props.ViewUSerBtnFunction('User/User?id=' + id);
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
                                            <th>Branch Code</th>
                                            <th>Agent Type Code Type</th>
                                            <th>User Code </th>
                                            <th>USer ID</th>
                                            <th>Full Name</th>
                                            <th>DOB</th>
                                            <th>Edit</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.data.userResponses.map(
                                                propsUserData => (

                                                    <tr key={propsUserData.id}>
                                                        <td>{propsUserData.branch_cd}</td>
                                                        <td>{propsUserData.agent_type_cd}</td>
                                                        <td>{propsUserData.user_cd}</td>
                                                        <td>{propsUserData.user_id}</td>
                                                        <td>{propsUserData.full_nm}</td>
                                                        <td>{propsUserData.dob}</td>
                                                        


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
                                                            <a onClick={() => deleteUserDataById(propsUserData.id, propsUserData.agent_type_cd)}>
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
export default CDAIncentiveTable;
