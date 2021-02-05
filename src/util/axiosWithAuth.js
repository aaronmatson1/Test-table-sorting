import axios from 'axios'

export default function axiosWithAuth(){
    const token =localStorage.getItem('token');

    return axios.create({
        baseURL: "https://fakestoreapi.com/products",
        headers:{
            Authorization:token
        }
    });
}