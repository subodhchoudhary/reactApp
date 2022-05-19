import React from "react";
import NavBar from "../Pages/Navbars/NavBar";
import FinanceNav from "../Pages/Navbars/FinanceNav";
import Welcometxt4 from "../Pages/Middle Text/Welcometxt4";
import Footer from "../Pages/Footer";

function Finance(){
    return(
        <>
           <NavBar></NavBar> 
           <FinanceNav></FinanceNav>
           <Welcometxt4></Welcometxt4>
           <Footer></Footer>
        </>
    );
}

export default Finance;