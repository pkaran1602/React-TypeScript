import React, { useState } from 'react'
import Contact from '../contact/Contact'

const About = () => {

    const [my_value, setMy_value] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);


    const isShow = ()=>{
        setIsOpen(true)
    };
    const isClosed = ()=>{
        setIsOpen(false)
    }

  return (
    <div>
        <div>
            <h1 data-testid="heading">Counter</h1>
        </div>
            <p>{my_value}</p>
            <button onClick={()=>setMy_value(val=>val+1)}>Increase</button>
            <button onClick={()=>setMy_value(val=>val-1)}>Increase</button>
            <span>Here you can also check about contact page</span>
            <button onClick={isShow}>Show</button>
            {/* {isOpen && (
                <>
                <div>
                <Contact 
                my_value= {my_value}
                isClosed={isClosed}
                />
            </div>
            </>
            )} */}
            
    </div>
  )
}

export default About