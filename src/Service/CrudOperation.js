// JavaScript source code

const ApiUrl = process.env.REACT_APP_APIURL;


const AddUserFunction = async (userPath, postData) => {
    try {
        let myGetToken = JSON.parse(localStorage.getItem("TokenLocal")).token.access_Token;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + myGetToken);
        myHeaders.append("content-type", "application/json");
        
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(ApiUrl + userPath, requestOptions)
            
            .catch(error => console.log('error', error));
        console.warn(response.status);

        const [returnStatus, returnData] = await Promise.all([response.status, response.json()])

        return { returnStatus, returnData};
    }
    catch (error) {
        console.error('Could not get api ' + error);
    }
}

const GetUserDataByIds = async (ids) => {    
   
    try {
        let myGetToken = JSON.parse(localStorage.getItem("TokenLocal")).token.access_Token;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + myGetToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(ApiUrl + ids, requestOptions)

            .catch(error => console.warn('error', error));
     
        if (response.status === 200) {

            const [returnStatus, returnData] = await Promise.all([response.status, response.json()]);

            return await { returnStatus, returnData };
        }
        else {
            return await response.status;           
        }      

    }
    catch (error) {
        console.warn('Could not get api ' + error);
    }
};


const GetUserDataById = async (idsAndUrl) => {
  

    try {
        let myGetToken = JSON.parse(localStorage.getItem("TokenLocal")).token.access_Token;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + myGetToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(ApiUrl + idsAndUrl, requestOptions)

            .catch(error => console.log('error', error));

        localStorage.setItem('getResponseStatus', response.status);
        if (response.status === 204) {
            alert('Invalid Entry');
        }
        return await response.json();

    }
    catch (error) {
        console.error('Could not get api ' + error);
    }
};


const deleteFunction = async (apiAndId) => {



    try {
        let myGetToken = JSON.parse(localStorage.getItem("TokenLocal")).token.access_Token;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + myGetToken);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(ApiUrl + apiAndId, requestOptions)

            .catch(error => console.log('error', error));

        localStorage.setItem('getResponseStatus', response.status);
        if (response.status === 204) {
            alert('Invalid Entry');
        }

        return response.status;

    }
    catch (error) {
        console.error('Could not get api ' + error);
    }
};

const UpdateUserDataFunction = async (apiAndUrl, postUserData) => {

    try {
        let myGetToken = JSON.parse(localStorage.getItem("TokenLocal")).token.access_Token;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + myGetToken);
        myHeaders.append("content-type", "application/json");
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify(postUserData),
            redirect: 'follow'
        };

        const response = await fetch(ApiUrl + apiAndUrl, requestOptions)

            .catch(error => console.log('error', error));

        localStorage.setItem('getResponseStatus', response.status);
        if (response.status === 204) {
            alert('Invalid Entry');
        }

        return response.status;

    }
    catch (error) {
        console.error('Could not get api ' + error);
    }
}


export { AddUserFunction, GetUserDataByIds, GetUserDataById, deleteFunction, UpdateUserDataFunction};