import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import './index.css'

const NavbarApp = () => {
  return (
    <div>
        <Home/>
        <Modal/>
        <Sidebar/>
    </div>
  )
}

export default NavbarApp