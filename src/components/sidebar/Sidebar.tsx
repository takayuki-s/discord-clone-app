import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import MicIcon from '@mui/icons-material/Mic'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import SettingsIcon from '@mui/icons-material/Settings'
import SidebarChannel from './SidebarChannel'
import { auth, db } from '../../firebase'
import { useAppSelector } from '../../app/hooks'
import { onSnapshot, collection, query, DocumentData } from 'firebase/firestore'

interface Channel {
  id: string
  channel: DocumentData
}

const Sidebar = () => {
  const [channels, setChannels] = useState<Channel[]>([])

  const user = useAppSelector((state) => state.user)

  const q = query(collection(db, 'channels'))

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const channelResults: Channel[] = []
      querySnapshot.docs.forEach((doc) =>
        channelResults.push({
          id: doc.id,
          channel: doc.data(),
        }),
      )
      setChannels(channelResults)
    })
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
      </div>
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord Clone</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>仮チャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
        </div>

        <div className="sidebarChannelList">
          {channels.map((channel) => (
            <SidebarChannel />
            // <SidebarChannel />
            // <SidebarChannel />
          ))}
        </div>

        <div className="sidebarFooter">
          <div className="sidebarAccount">
            <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
            <div className="accountName">
              <h4>{user?.displayName}</h4>
              <span>#{user?.uid.substring(0, 4)}</span>
            </div>
          </div>
          <div className="sidebarVoice">
            <MicIcon />
            <HeadphonesIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
