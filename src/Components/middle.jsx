import React from 'react'
import style from "./style/middle.module.css"
import Chatslist from './chatslist';
import { LuSquarePlus } from 'react-icons/lu';
import { FiMoreVertical } from 'react-icons/fi';
import Status from './Status';
import Channels from "./Channels"
import Profile from './Profile';
function Listchat({ middlepage }) {
    console.log("Active middle view:", middlepage);

    return (
        <div className={style.ListchatContainer}>
            {/* Conditionals to switch sub-panels based on Sidenav value */}
            {middlepage === "Chats" && <Chatslist />}

            {middlepage === "Status" && (
                <Status />
            )}

            {middlepage === "Channels" && (
                <Channels />
            )}

            {middlepage === "Communities" && (
                <div className={style.placeholderView}>
                    <h2>Communities</h2>
                    <p>Bring your neighborhoods or teams together.</p>
                </div>
            )}

            {middlepage === "Media" && (
                <div className={style.placeholderView}>
                    <h2>Media & Files</h2>
                    <p>Manage shared links, documents, and photos.</p>
                </div>
            )}
            {middlepage === "Profile" && (
                <Profile />
            )}
        </div>
    )
}

export default Listchat