import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div>
            <ul>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/practice'>Practice</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header