import React, { FormEventHandler, useCallback, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


interface my_data {
    id?:number,
    firstname:string,
    lastname:string,
    email?:string | number,
    phone: number
}

const Home = () => {


    const [my_input, setMy_input] = useState<my_data>({
        firstname:"",
        lastname:"",
        email:"",
        phone:0
    });

    const [my_details, setMy_details] = useState<my_data | null>(null)

    const change_fun = (e:React.ChangeEvent<HTMLInputElement>)=>{
            setMy_input({...my_input, [e.target.name]:e.target.value})
    };

    const submit_fun = useCallback((e:React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
                setMy_details(my_input)
    },[my_input])
    useEffect(()=>{
         if(my_details){
            console.log("this is my details", my_details)
         }   
    },[my_details])

  return (
    <div>
      <h1>My Input Fields</h1>
      <form onSubmit={submit_fun}>
        <input name="firstname" value={my_input.firstname} onChange={change_fun} />
        <input name="lastname" value={my_input.lastname} onChange={change_fun} />
        <input name="email" value={my_input.email as string} onChange={change_fun} />
        <input name="phone" value={my_input.phone} onChange={change_fun} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Home