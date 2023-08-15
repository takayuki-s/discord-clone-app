import React, { useState } from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import GifIcon from '@mui/icons-material/Gif'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import ChatMessage from './ChatMessage'
import { useAppSelector } from '../../app/hooks'
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../../firebase'

const Chat = () => {
  const [inputText, setInputText] = useState<string>('')
  const channelId = useAppSelector((state) => state.channel.channelId)
  const user = useAppSelector((state) => state.user.user)

  const sendMessage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()

    // channelコレクションの中にあるmessageコレクションの中にメッセージ情報を入れる
    const collectionRef: CollectionReference<DocumentData> = collection(
      db,
      'channels',
      String(channelId),
      'message',
    )

    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        message: inputText,
        timestamp: serverTimestamp(),
        user: user,
      },
    )
    console.log(docRef)
  }

  const channelName = useAppSelector((state) => state.channel.channelName)
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
      </div>
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input
            type="text"
            placeholder="メッセージを送信"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
          />
          <button
            type="submit"
            className="chatInputButton"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              sendMessage(e)
            }
          >
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  )
}

export default Chat
