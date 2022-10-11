const axios = require('axios');
const url = 'user/authenticate'
const payload = {
    emailAddress: process.env.EMAIL,
    password: process.env.PASSWORD
}

exports.token = async() =>{
    try {
        let response = await axios.post(`${process.env.BASEURL}${url}`, payload)
        return response.data.token
    } catch (error) {
        return error
    }
       
};