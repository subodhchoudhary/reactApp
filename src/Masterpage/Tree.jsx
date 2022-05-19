import React from "react";
import NavBar from "../Pages/Navbars/NavBar";
import TreeNav from "../Pages/Navbars/TreeNav";
import Welcometxt8 from "../Pages/Middle Text/Welcometxt8";
import Footer from "../Pages/Footer";

function Tree(){
    return(
        <>
            <NavBar></NavBar>
            <TreeNav></TreeNav>
            <Welcometxt8></Welcometxt8>
            <Footer></Footer>
        </>
    );
}

export default Tree;