import React from "react";
import { toast } from 'react-toastify';
import { deleteFunction } from '../../Service/CrudOperation';
import $ from 'jquery';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


function FranchiseTable(props) {
    $(() => {
        $(".DataTbl").DataTable();
    });

    const deleteUserDataById = (id, franchise_cd) => {
        const apiAndId = 'Franchise/Franchise/' + id

        if (window.confirm("Are You Sure Want To Delete")) {

            const returnStatus = deleteFunction(apiAndId);
            returnStatus.then((returnSt) => {
                if (returnSt === 200) {
                    toast.success("Id = " + id + "channel Type Code = " + franchise_cd + " is Deleted", { position: toast.POSITION.TOP_CENTER });
                }
            })


        }




    };

    const updateUserDataById = (id) => {

        props.UpdateFranchiseDataFun('Franchise/Franchise?id=' + id)
    }

    const ViewUSerData = (id) => {
        props.ViewFranchiseBtnFunction('Franchise/Franchise?id=' + id);
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
                      <th>franchise_cd</th>
                      <th>franchise</th>
                      <th>franchise_rank</th>
                      <th>description</th>
                      
                      <th>Edit</th>
                      <th>View</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>      
                     {
                                          props.data.franchiseResponses.map(
                                              propsUserData => (

                                                  <tr key={propsUserData.id}>
                                                      <td>{propsUserData.franchise_cd }</td>
                                                      <td>{propsUserData.franchise}</td>
                                                      <td>{propsUserData.franchise_rank}</td>
                                                      <td>{propsUserData.description}</td>
                                                                                                       

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
                                                          <a onClick={() => deleteUserDataById(propsUserData.id, propsUserData.franchise_cd)}>
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
      
     
export default FranchiseTable;
