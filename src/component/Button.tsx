import React, { useEffect, useState } from "react";
import { my_data } from "./My_Axios";

const Button = () => {

    const [value, setvalue] = useState({
            name:"",
            email:"",
            phone:"",
    });
    const [my_details, setMy_details] = useState({ })

//   useEffect(() => {
//     my_data();
//   });

  const change_fun = (e:React.ChangeEvent<HTMLInputElement>)=>{
            setvalue({...value, [e.target.name]:e.target.value})
  };
  const submit_btn = (e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            setMy_details(value)
  };
console.log(my_details)
  return (
    <div>
      <form onSubmit={submit_btn}>
        <h1>My Form</h1>
        <div>
        <label htmlFor=""></label>
        <input type="text" name="name" value={value.name} onChange={change_fun} />
        </div>
        <div>
        <label htmlFor=""></label>
        <input type="text" name="email" value={value.email} onChange={change_fun}/>
        </div>
        <div>
        <label htmlFor=""></label>
        <input type="text" name="phone" value={value.phone} onChange={change_fun}/>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
      <div>
      </div>
    </div>
  );
};

export default Button;
