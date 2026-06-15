import React from 'react'
import style from "./style/Status.module.css"
import { LuSquarePlus } from 'react-icons/lu'
import { FiMoreVertical } from 'react-icons/fi'
function Status() {
    return (
        <>
            <div className={style.placeholderView}>
                <header className={style.header}>
                    <left className={style.left_header}>
                        <h2>Status</h2>
                    </left>
                    <right className={style.right_header}>
                        <button className={style.btn}><LuSquarePlus /></button>
                        <button className={style.btn}><FiMoreVertical /></button>
                    </right>
                </header>
            </div>
        </>
    )
}

export default Status
