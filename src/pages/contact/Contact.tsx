import React, { useEffect, useState } from 'react'
import { my_detials } from '../../axios/Api_Axios'
import { Table } from 'react-bootstrap';

const Contact = () => {

    const [my_data, setMy_data] = useState<any[]>([])

    useEffect(()=>{
        my_detials().then((response)=>{
            setMy_data(response)
        })
    },[]);

    const delete_fun = (id:number)=>{
          const updatedData  =  my_data.filter((ele)=>ele.id !== id);
          setMy_data(updatedData)
    };

  return (
    <div>
        <div>
            <h1>Hello</h1>
        </div>
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {my_data?.map((item)=>(
            <>
             <tr key={item.id}>
          <td>{item.username}</td>
          <td>{item.email}rk</td>
          <td>@{item.phone}</td>
          <td>{item.website}</td>
          <button onClick={()=>delete_fun(item.id)}>Delete</button>
        </tr>
            </>
        ))}
       
      </tbody>
    </Table>
        </div>
    </div>
  )
}

export default Contact