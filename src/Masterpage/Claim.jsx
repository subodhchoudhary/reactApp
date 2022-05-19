import React from "react";
import NavBar from "../Pages/Navbars/NavBar";
import ClaimNav from "../Pages/Navbars/ClaimNav";
import Welcometxt3 from "../Pages/Middle Text/Welcometxt3";
import Footer from "../Pages/Footer";

function Claim(){
    return(
        <>
         <NavBar></NavBar> 
         <ClaimNav></ClaimNav>  
         <Welcometxt3></Welcometxt3>
         <Footer></Footer>
        </>
    );
}

export default Claim;