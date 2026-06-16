import React from 'react'
import style from "./style/Channels.module.css"
import { FiMoreVertical } from 'react-icons/fi'
import { LuPlus } from 'react-icons/lu'

function Channels() {
    // Simulated list of joined/suggested channels
    const channelsData = [
        { id: 1, name: "JavaScript Community", followers: "2.4M followers", initial: "JS", verified: true },
        { id: 2, name: "React Core Updates", followers: "1.8M followers", initial: "R", verified: true },
        { id: 3, name: "UI/UX Design Lab", followers: "420K followers", initial: "UI", verified: false },
    ];

    return (
        <div className={style.ChannelsContainer}>
            {/* Header Section */}
            <header className={style.header}>
                <div className={style.left_header}>
                    <h2>Channels</h2>
                </div>
                <div className={style.right_header}>
                    <button className={style.btn} aria-label="Create Channel"><LuPlus /></button>
                    <button className={style.btn} aria-label="More options"><FiMoreVertical /></button>
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