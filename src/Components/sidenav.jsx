import React, { useState } from 'react'
import style from "./style/sidenav.module.css"
import { FaRegImages } from 'react-icons/fa'
import { MdOutlineMessage } from 'react-icons/md'
import { SiCircle } from 'react-icons/si'
import { TbMessageUser } from 'react-icons/tb'
import { HiOutlineUserGroup } from 'react-icons/hi'

// 1. Pass down 'setParentNav' (or whatever function you use in App.jsx to handle pages) as a prop
function Sidenav({ setActivePage="Chats" }) {
    const [navvalue, setnavvalue] = useState("Chats")

    // Helper function to update internal state AND notify the parent layout safely
    const handleNavClick = (value) => {
        setnavvalue(value);
        if (setActivePage) {
            setActivePage(value); // This securely passes the data upward without infinite loops
        }
    }

    return (
        <div className={style.Sidenav}>
            {/* Top Navigation Options */}
            <div className={style.topsection}>
                {/* 2. Changed onChange to onClick, and added an active CSS class indicator */}
                <button 
                    aria-label="Chats" 
                    className={navvalue === "Chats" ? style.activeButton : ""} 
                    onClick={() => handleNavClick("Chats")}
                >
                    <MdOutlineMessage />
                </button>
                
                <button 
                    aria-label="Status" 
                    className={navvalue === "Status" ? style.activeButton : ""} 
                    onClick={() => handleNavClick("Status")}
                >
                    <SiCircle />
                </button>
                
                <button 
                    aria-label="Channels" 
                    className={navvalue === "Channels" ? style.activeButton : ""} 
                    onClick={() => handleNavClick("Channels")}
                >
                    <TbMessageUser />
                </button>
                
                <button 
                    aria-label="Communities" 
                    className={navvalue === "Communities" ? style.activeButton : ""} 
                    onClick={() => handleNavClick("Communities")}
                >
                    <HiOutlineUserGroup />
                </button>
            </div>

            {/* Bottom Actions Section */}
            <div className={style.bottomsection}>
                <button 
                    aria-label="Media" 
                    className={navvalue === "Media" ? style.activeButton : ""} 
                    onClick={() => handleNavClick("Media")}
                >
                    <FaRegImages />
                </button>
                <img
                    className={style.profile_img}
                    src="https://imgs.search.brave.com/rDj6VkF_MVhp-JUVYY0ocmrmEREevLAbQqQfyW39KWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAx/OTg5NjIzNC9waG90/by9wcm9maWxlLXNo/b3Qtb2YtYmVhdXRp/ZnVsLXlvdW5nLW1h/bi1zaG90LW9uLXN0/dWRpby5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9azBzRWlU/NkhRUjFHcXFtamlS/czlLby1fVm91aFFw/WnRJeU9VSjRDODVm/WT0"
                    alt="profile"
                    onClick={() => handleNavClick("Profile")}
                />
            </div>
        </div>
    )
}

export default Sidenav