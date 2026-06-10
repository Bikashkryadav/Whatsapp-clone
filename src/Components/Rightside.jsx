import React from 'react'
import style from "./style/Rightside.module.css"
import { FaRegFileAlt } from 'react-icons/fa'
import { IoPersonAddOutline } from 'react-icons/io5'
import Chat from './Chat'

function Rightside({ page = "default" }) {
    return (
        <>
            <div className={style.Rightside}>
                {/* Default Landing View (Fixed the & to &&) */}
                {page === "default" && (
                    <div className={style.defaultView}>
                        <div className={style.button_section}>
                            <button><FaRegFileAlt /></button>
                            <span>Send document</span>
                        </div>
                        <div className={style.button_section}>
                            <button><IoPersonAddOutline /></button>
                            <span>Add contact</span>
                        </div>
                    </div>
                )}

                {/* Active Chat View (Fixed the & to &&) */}
            </div>
            {page === "chat" && (
                <Chat />
            )}
        </>
    )
}

export default Rightside