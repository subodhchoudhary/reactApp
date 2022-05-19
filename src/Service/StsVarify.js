


const StsVarify = (Lstatus, status) => {

    let myReturnResponse = {};

    if (Lstatus == 400 && status == 85) {

        return myReturnResponse = { rtLogin: "/", rtStatus: 400 };
    }
    if (Lstatus == 200 && status == 0) {
       
        return myReturnResponse={rtLogin: "/Homepage",rtStatus:200};
    }
}

export default StsVarify;