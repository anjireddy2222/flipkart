import cookie from 'react-cookies';
import axios from axios;

export const profileUpdateApi = (name, email, mobile) =>{
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("uid", cookie.load('uid'));
    // localStorage.getItem('uid'); //2nd method for getting loggedin user id

    return axios.post('/profileUpdate', formData);
}
