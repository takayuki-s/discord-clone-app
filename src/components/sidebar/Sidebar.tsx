import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord Clone</h3>
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
