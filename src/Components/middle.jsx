import React from 'react'
import style from "./style/middle.module.css"
import Chatslist from './chatslist';

function Listchat({ middlepage }) {
    console.log("Active middle view:", middlepage);

    return (
        <div className={style.ListchatContainer}>
            {/* Conditionals to switch sub-panels based on Sidenav value */}
            {middlepage === "Chats" && <Chatslist />}

            {middlepage === "Status" && (
                <div className={style.placeholderView}>
                    <h2>Status</h2>
                    <p>View updates from your contacts here.</p>
                </div>
            )}

            {middlepage === "Channels" && (
                <div className={style.placeholderView}>
                    <h2>Channels</h2>
                    <p>Stay updated on your favorite topics.</p>
                </div>
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
        </div>
    )
}

export default Listchat