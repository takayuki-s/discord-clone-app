import React from 'react'
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src='./logo192.png' />
        </div>
        <div className='serverIcon'>
          <img src='./logo192.png' />
        </div>
      </div>
      <div className='sidebarRight'>
        <div className='sidbarTop'>
          <h3>Discord Clone</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar