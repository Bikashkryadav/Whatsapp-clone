import React from 'react'
import style from "./style/sidenav.module.css"
import { FaRegImages } from 'react-icons/fa' // Removed the unused 'M' import
import { MdOutlineMessage } from 'react-icons/md'
import { SiCircle } from 'react-icons/si'
import { TbMessageUser } from 'react-icons/tb'
import { HiOutlineUserGroup } from 'react-icons/hi'

function Sidenav() {
    return (
        <div className={style.Sidenav}>
            {/* Using standard div or section elements with your classes */}
            <div className={style.topsection}>
                <button aria-label="Chats"><MdOutlineMessage /></button>
                <button aria-label="Status"><SiCircle /></button>
                <button aria-label="Channels"><TbMessageUser /></button>
                <button aria-label="Communities"><HiOutlineUserGroup /></button>
            </div>
            
            <div className={style.bottomsection}>
                <button aria-label="Media"><FaRegImages /></button>
                <img 
                    className={style.profile_img} 
                    src="https://imgs.search.brave.com/rDj6VkF_MVhp-JUVYY0ocmrmEREevLAbQqQfyW39KWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAx/OTg5NjIzNC9waG90/by9wcm9maWxlLXNo/b3Qtb2YtYmVhdXRp/ZnVsLXlvdW5nLW1h/bi1zaG90LW9uLXN0/dWRpby5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9azBzRWlU/NkhRUjFHcXFtamlS/czlLby1fVm91aFFw/WnRJeU9VSjRDODVm/WT0" 
                    alt="profile" 
                />
            </div>
        </div>
    )
}

export default Sidenav