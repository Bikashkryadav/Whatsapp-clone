import React, { useState } from 'react'
import style from "./style/Chat.module.css"
import { LuSearch, LuSmile, LuPaperclip, LuSend } from 'react-icons/lu'
import { HiOutlinePhone } from 'react-icons/hi'

function Chat() {
    // Local state to track text inputs safely
    const [typedMessage, setTypedMessage] = useState("");

    // Simulated historical conversation messages
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey! Did you check out the new design updates?", time: "10:14 AM", sentByMe: false },
        { id: 2, text: "Yeah, looking crisp. The dark layout matches up nicely.", time: "10:15 AM", sentByMe: true },
        { id: 3, text: "Awesome, let me know when the backend integration is hooked up.", time: "10:16 AM", sentByMe: false },
    ]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!typedMessage.trim()) return;

        // Append new message locally
        setMessages([
            ...messages,
            {
                id: Date.now(),
                text: typedMessage,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                sentByMe: true
            }
        ]);
        setTypedMessage("");
    };

    return (
        <div className={style.chatWindowContainers}>
            {/* 1. Top Bar Header Section */}
            <header className={style.chatHeader}>
                <div className={style.profileArea}>
                    <div className={style.avatarPlaceholder}>A</div>
                    <div className={style.userInfo}>
                        <h3>Alex</h3>
                        <span>online</span>
                    </div>
                </div>
                <div className={style.actionIcons}>
                    <button aria-label="Call"><HiOutlinePhone /></button>
                    <button aria-label="Search messages"><LuSearch /></button>
                    <button aria-label="Menu"></button>
                </div>
            </header>

            {/* 2. Message History Stream */}
            <div className={style.messageStream}>
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`${style.messageBubbleWrapper} ${msg.sentByMe ? style.outgoingWrapper : style.incomingWrapper}`}
                    >
                        <div className={`${style.bubble} ${msg.sentByMe ? style.outgoing : style.incoming}`}>
                            <p className={style.messageText}>{msg.text}</p>
                            <span className={style.messageTime}>{msg.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. Bottom Context Input Controller */}
            <form onSubmit={handleSendMessage} className={style.inputControllerBars}>
                <div className={style.utilityIcons}>
                    <button type="button" aria-label="Emojis"><LuSmile /></button>
                    <button type="button" aria-label="Attach file"><LuPaperclip /></button>
                </div>
                <input 
                    type="text" 
                    placeholder="Type a message" 
                    value={typedMessage}
                    onChange={(e) => setTypedMessage(e.target.value)}
                    className={style.mainTextInput}
                />
                <button type="submit" className={style.sendActionButton} aria-label="Send message">
                    <LuSend />
                </button>
            </form>
        </div>
    )
}

export default Chat