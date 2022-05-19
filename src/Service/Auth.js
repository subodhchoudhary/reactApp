import EncriptData from './EncriptData';

const Auth = (username, password) => {
   
    const ApiUrl = process.env.REACT_APP_APIURL;
    const User_Type = process.env.REACT_APP_User_Type;
    const User_Nm = process.env.REACT_APP_User_Nm;
    const Password = process.env.REACT_APP_Password;
    const Secret_Key = process.env.REACT_APP_Secret_Key;
    const IP_Address = process.env.REACT_APP_IP_Address;
    const Application_Source = process.env.REACT_APP_Application_Source;

    var myPass = EncriptData(password);
 /*   alert(myPass);*/

    const body = {
        User_Type: User_Type,
        User_Nm: username.trim(),
        Password: password.trim(),
        Secret_Key: Secret_Key,
        IP_Address: IP_Address,
        Application_Source: Application_Source
    };


    const CreateToken = async () => {
        try {
           const response= await fetch(ApiUrl + 'Admin/Token', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'content-type': 'application/json'
                }
           })
          
            localStorage.setItem('responseStatus', response.status);           
            return await response.json();
        }
        catch (error) {
            console.error('Could not get api ' + error);
        }
    }

    CreateToken().then((Result) => {
        localStorage.setItem('TokenLocal', JSON.stringify(Result.responseObj));
    })
      

   
    return CreateToken();
};

export default Auth;