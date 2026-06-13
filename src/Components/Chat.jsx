import React, { useState, useEffect, useRef } from 'react'
import style from "./style/Chat.module.css"
import { LuSearch, LuSmile, LuPaperclip, LuSend } from 'react-icons/lu'
import { HiOutlinePhone } from 'react-icons/hi'
import { IoPersonSharp } from 'react-icons/io5'
import { FaRegFaceGrin } from 'react-icons/fa6'

function Chat() {
    const [typedMessage, setTypedMessage] = useState("");
    
    // 🎯 Tracks the ID of the single message currently hovered, default is null (none)
    const [hoveredMessageId, setHoveredMessageId] = useState(null);

    const [messages, setMessages] = useState([
        { id: 1, text: "Hey! Did you check out the new design updates?", time: "10:14 AM", sentByMe: false },
        { id: 2, text: "Yeah, looking crisp. The dark layout matches up nicely.", time: "10:15 AM", sentByMe: true },
        { id: 3, text: "Awesome, let me know when the backend integration is hooked up.", time: "10:16 AM", sentByMe: false },
    ]);

    // ⚓ Create a tracking anchor for the bottom of the conversation stream box
    const messagesEndRef = useRef(null);

    // 🔄 Auto-scroll anchor execution lifecycle trigger hook
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]); // Fires instantly every time the messages state array updates length parameters

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!typedMessage.trim()) return;

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

            {/* Main Window Chat Header */}
            <header className={style.chatHeader}>
                <div className={style.profileArea}>
                    <div className={style.avatarPlaceholder}><IoPersonSharp size={20} /></div>
                    <div className={style.userInfo}>
                        <h3>Alex</h3>
                        <span>online</span>
                    </div>
                </div>
                <div className={style.actionIcons}>
                    <button aria-label="Call"><HiOutlinePhone /></button>
                    <button aria-label="Search messages"><LuSearch /></button>
                </div>
            </header>

            {/* Message History Display Stream Container */}
            <div className={style.messageStream}>
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`${style.messageBubbleWrapper} ${msg.sentByMe ? style.outgoingWrapper : style.incomingWrapper}`}
                        // 🛠️ Set state context specifically to this message ID on entry, clear on leave
                        onMouseEnter={() => setHoveredMessageId(msg.id)}
                        onMouseLeave={() => setHoveredMessageId(null)}
                    >
                        {/* 🔒 Gatekeeper: Emoji renders ONLY if this specific item ID matches the current hover state */}
                        {hoveredMessageId === msg.id && (
                            <div className={`${style.imoj} ${msg.sentByMe ? style.imojOutgoing : style.imojIncoming}`}>
                                <FaRegFaceGrin className={style.icon} size={18} />
                            </div>
                        )}
                        
                        {/* Text Message Card Bubble */}
                        <div className={`${style.bubble} ${msg.sentByMe ? style.outgoing : style.incoming}`}>
                            <p className={style.messageText}>{msg.text}</p>
                            <span className={style.messageTime}>{msg.time}</span>
                        </div>
                    </div>
                ))}

                {/* 🎯 The Scroll Anchor Marker (Invisible element keeping the layout aligned) */}
                <div ref={messagesEndRef} />
            </div>

            {/* Bottom Input Operations Bar */}
            <form onSubmit={handleSendMessage} className={style.inputControllerBars}>
                <div className={style.utilityIcons}>
                    <button type="button" aria-label="Emojis"><LuSmile /></button>
                    <button type="button" aria-label="Attach file"><LuPaperclip /></button>
                </div>
                <input
                    type="text"
                    placeholder="Type a message..."
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

export default Chat;