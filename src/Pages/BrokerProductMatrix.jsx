import React from "react";
import "../Css/Mainstyle.css";
import $ from 'jquery';
// import { Link } from "react-router-dom";

function BrokerProductMatrix() {
  $(() => {
    $(".DataTbl").DataTable();
  });
  
  return (
    <>
      <div id="page-wrapper" className="page-wrapper-cls">
        <div id="page-inner" className="mt-3 px-6 py-6">
          <div className="x_panel boxshadow">
            <div className="x_title">
              <div className="row">
                <div className="top-head">
                  <div className="col-md-3 col-sm-3 col-xs-6">
                    <div className="slope">
                      <h2>Broker Product Matrix</h2>
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
                  <label className="control-label from-txt">Broker Code:</label>
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <label className="control-label from-txt">Broker Name:</label>
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-1"></div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <input
                    type="submit"
                    name=""
                    value="Search"
                    id=""
                    className="expdbutton btnSearch mr-2"
                  />
                  <input
                    type="submit"
                    name=""
                    value="Refresh"
                    id=""
                    className="expdbutton btnback mr-2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="x_panel boxshadow">
            <div className="form-group" id="">
              <div className="form-group x_content">
                
                  <table className="display w-100 DataTbl">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Broker Code</th>
                        <th>Broker Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>BR0001</td>
                        <td>HealthProductTest</td>
                        <td>
                          <i className="fa-solid fa-2x fa-circle-arrow-right"></i>
                        </td>
                      </tr>
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

export default BrokerProductMatrix;
