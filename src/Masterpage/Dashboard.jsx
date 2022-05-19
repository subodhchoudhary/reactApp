import React from "react";
import NavBar from "../Pages/Navbars/NavBar";
import DashboardNav from "../Pages/Navbars/DashboardNav";
import Welcometxt9 from "../Pages/Middle Text/Welcometxt9";
import Footer from "../Pages/Footer";

function Dashboard(){
    return(
        <>
            <NavBar></NavBar>
            <DashboardNav></DashboardNav>
            <Welcometxt9></Welcometxt9>
            <Footer></Footer>
        </>
    );
}

export default Dashboard;