import React, { useState } from 'react'
import style from "./style/Profile.module.css"
import { LuArrowLeft, LuPencil, LuCheck, LuUser, LuFileText } from 'react-icons/lu'

function Profile({ onBackClick }) {
    // Simulated state for existing profile values
    const [name, setName] = useState("Alex");
    const [bio, setBio] = useState("Hey there! I am using ChatApp.");
    
    // Toggle tracking for edit inputs
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingBio, setIsEditingBio] = useState(false);

    return (
        <div className={style.ProfileContainer}>
            {/* Header Section */}
            <header className={style.header}>
                <button 
                    className={style.backBtn} 
                    onClick={onBackClick} 
                    aria-label="Back to settings"
                >
                    <LuArrowLeft />
                </button>
                <h2>Profile</h2>
            </header>

            {/* Profile Avatar Center Display */}
            <div className={style.avatarContainer}>
                <div className={style.avatarWrapper}>
                    <img 
                        src="https://imgs.search.brave.com/rDj6VkF_MVhp-JUVYY0ocmrmEREevLAbQqQfyW39KWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAx/OTg5NjIzNC9waG90/by9wcm9maWxlLXNo/b3Qtb2YtYmVhdXRp/ZnVsLXlvdW5nLW1h/bi1zaG90LW9uLXN0/dWRpby5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9azBzRWlU/NkhRUjFHcXFtamlS/czlLby1fVm91aFFw/WnRJeU9VSjRDODVm/WT0" 
                        alt="Profile display" 
                        className={style.profileImg} 
                    />
                </div>
            </div>

            {/* Editable Content Fields */}
            <div className={style.detailsBody}>
                
                {/* 1. Name Field Section */}
                <div className={style.infoSection}>
                    <label className={style.fieldLabel}>Your name</label>
                    <div className={style.fieldRow}>
                        <LuUser className={style.fieldIcon} />
                        {isEditingName ? (
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                className={style.fieldInput}
                                autoFocus
                                maxLength="25"
                            />
                        ) : (
                            <span className={style.fieldText}>{name}</span>
                        )}
                        <button 
                            className={style.actionBtn}
                            onClick={() => setIsEditingName(!isEditingName)}
                        >
                            {isEditingName ? <LuCheck className={style.saveColor} /> : <LuPencil />}
                        </button>
                    </div>
                    <p className={style.noticeText}>
                        This is not your username or pin. This name will be visible to your chat contacts.
                    </p>
                </div>

                {/* 2. About/Bio Field Section */}
                <div className={style.infoSection}>
                    <label className={style.fieldLabel}>About</label>
                    <div className={style.fieldRow}>
                        <LuFileText className={style.fieldIcon} />
                        {isEditingBio ? (
                            <input 
                                type="text" 
                                value={bio} 
                                onChange={(e) => setBio(e.target.value)}
                                className={style.fieldInput}
                                autoFocus
                                maxLength="60"
                            />
                        ) : (
                            <span className={style.fieldText}>{bio}</span>
                        )}
                        <button 
                            className={style.actionBtn}
                            onClick={() => setIsEditingBio(!isEditingBio)}
                        >
                            {isEditingBio ? <LuCheck className={style.saveColor} /> : <LuPencil />}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile