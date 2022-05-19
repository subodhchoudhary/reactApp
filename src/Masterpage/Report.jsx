import React from "react";
import NavBar from "../Pages/Navbars/NavBar";
import ReportNav from "../Pages/Navbars/ReportNav";
import Welcometxt5 from "../Pages/Middle Text/Welcometxt5";
import Footer from "../Pages/Footer";

function Report(){
    return(
        <>
           <NavBar></NavBar> 
           <ReportNav></ReportNav>
           <Welcometxt5></Welcometxt5>
           <Footer></Footer>
        </>
    );
}

export default Report;