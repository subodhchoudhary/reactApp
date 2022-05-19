import React from "react";
import logo from "../../Images/logo1.png";
import user1 from "../../Images/user1.png";
import "../../Css/NavBar.css";
import "../../Css/Mainstyle.css";

function NavBar() {
    const globalUserName = localStorage.getItem("LocalStorageUserName");

  return (
    <>
      <div className="container-fluid mainCon">
        <div className="row ">
          <div className="col-md-2">
            <a href="/">
              <img src={logo} alt="" className="img-responsive logo-eno" />
            </a>
          </div>
          <div className="col-md-10 div-padd">
            <div className="row">
              <div className="col-md-9 lin-hght">
                <label >
                  <b className="tymfnt">System Login : </b>
                </label>
                <label >
                  <b className="tymfnt"> 12-04-2022 08:58:52</b>
                </label>
                <br />
                <label >
                  <b className="tymfnt">Last Login : </b>
                </label>
                <label >
                  <b className="tymfnt"> 12-04-2022 08:58:46</b>
                </label>
              </div>
              <div className="col-md-3 ">
                <div className="row secCon">
                  <div className="col-md-4 text-end p-0">
                    <img src={user1} alt="" className="rounded-circle cile1" />
                  </div>
                  <div className="col-md-3 txtAlign">
                    <div className="nameCon">
                                          <span className="username text-blue">{globalUserName}</span>
                    </div>
                  </div>
                  <div className="col-md-4 text-start">
                    <div className="text-purple logoutanc">
                      <a href="/" className="logoutanc text-purple">
                        <i
                          className="fa fa-2x fa-power-off"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
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
export default NavBar;
