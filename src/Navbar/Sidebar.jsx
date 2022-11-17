import React from 'react'
import { FaTimes } from 'react-icons/fa'
import logo from './logo.png'
import {social, links} from '../Navbar/data'

const Sidebar = () => {

  return (
    <aside className={`sidebar`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt="logo-img" />
        <button className='close-btn'>
          <FaTimes/>
        </button>
      </div>
      <ul className='links'>
        {links.map((link)=>{
          const{id, url, text, icon} = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar