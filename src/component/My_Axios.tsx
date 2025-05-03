import axios from "axios";

export  const my_data  = async ()=>{
            return axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
                console.log(response);
                return response.data
            })
}