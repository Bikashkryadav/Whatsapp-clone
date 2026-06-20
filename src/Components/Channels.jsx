import React, { useState } from 'react'
import style from "./style/Channels.module.css"
import { FiMoreVertical } from 'react-icons/fi'
import { LuPlus } from 'react-icons/lu'
import { LuRadio } from 'react-icons/lu' // Added a clean channel/broadcast icon
import { MdOutlineExplore } from 'react-icons/md'

function Channels() {
    const [addmenu, setaddmenu] = useState(false)
    const [moremenu, setmoremenu] = useState(false)

    // Closes all dropdowns when clicking anywhere outside
    const handleCloseMenus = () => {
        setaddmenu(false);
        setmoremenu(false);
    }

    const channelsData = [
        { id: 1, name: "JavaScript Community", followers: "2.4M followers", initial: "JS", verified: true },
        { id: 2, name: "React Core Updates", followers: "1.8M followers", initial: "R", verified: true },
        { id: 3, name: "UI/UX Design Lab", followers: "420K followers", initial: "UI", verified: false },
    ];

    return (
        <div className={style.ChannelsContainer} onClick={handleCloseMenus}>
            
            <header className={style.header}>
                <div className={style.left_header}>
                    <h2>Channels</h2>
                </div>
                
                <div className={style.right_header}>
                    
                    <div className={style.menuWrapper}>
                        <button 
                            className={style.btn} 
                            onClick={(e) => {
                                e.stopPropagation();
                                setaddmenu(!addmenu);
                                setmoremenu(false);
                            }}
                            aria-label="Create Channel"
                        >
                            <LuPlus />
                        </button>
                        
                        {addmenu && (
                            <div className={style.menuDropdownCard} onClick={(e) => e.stopPropagation()}>
                                <button className={style.menu_btn}>
                                    <LuRadio />
                                    <span>Create Channel</span>
                                </button>
                                <button className={style.menu_btn}>
                                    <MdOutlineExplore />
                                    <span>Discover Channels</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* 2. More Options Menu Pair */}
                    <div className={style.menuWrapper}>
                        <button 
                            className={style.btn} 
                            onClick={(e) => {
                                e.stopPropagation();
                                setmoremenu(!moremenu);
                                setaddmenu(false);
                            }}
                            aria-label="More options"
                        >
                            <FiMoreVertical />
                        </button>
                        
                        {moremenu && (
                            <div className={style.menuDropdownCard} onClick={(e) => e.stopPropagation()}>
                                <button className={style.menu_btn}>
                                    <span>Channel Settings</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Subtext description */}
            <p className={style.descriptionText}>
                Stay updated on your favorite topics. Find channels to follow below.
            </p>

            {/* Channels List Body */}
            <div className={style.channelsContent}>
                <div className={style.sectionDivider}>
                    <span>YOUR CHANNELS</span>
                </div>

                <div className={style.channelsList}>
                    {channelsData.map((channel) => (
                        <div key={channel.id} className={style.channelRowItem}>
                            <div className={style.avatarPlaceholder}>
                                {channel.initial}
                            </div>
                            <div className={style.channelTextDetails}>
                                <div className={style.nameHeadingRow}>
                                    <h3>{channel.name}</h3>
                                    {channel.verified && (
                                        <span className={style.verifiedBadge} title="Verified Channel">✓</span>
                                    )}
                                </div>
                                <span className={style.followerCount}>{channel.followers}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Discover CTA Button */}
                <div className={style.discoverWrapper}>
                    <button className={style.discoverBtn}>Explore Directories</button>
                </div>
            </div>
        </div>
    )
}

export default Channels
