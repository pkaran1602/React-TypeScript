import axios from "axios";

export const my_detials = async()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
        console.log(response.data)
        return response.data
    })
}