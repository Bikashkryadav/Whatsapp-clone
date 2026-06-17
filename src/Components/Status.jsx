import React, { useState } from 'react'
import style from "./style/Status.module.css"
import { FiMoreVertical } from 'react-icons/fi'
import { LuCirclePlus } from 'react-icons/lu'
import { CiLock } from 'react-icons/ci'

function Status() {
    // Simulated list of status updates from friends
    const [menubar, setmenubar] = useState(false)
    const updates = [
        { id: 1, name: "Alex", time: "35 minutes ago", initial: "A", viewed: false },
        { id: 2, name: "Sarah", time: "Today, 4:12 PM", initial: "S", viewed: true },
        { id: 3, name: "Project Group", time: "Yesterday, 11:00 PM", initial: "P", viewed: true }
    ];

    return (
        <div className={style.placeholderView}>
            {/* Header section with valid semantic div elements */}
            <header className={style.header}>
                <div className={style.left_header}>
                    <h2>Status</h2>
                </div>
                <div className={style.right_header}>
                    <button className={style.btn} aria-label="Add Status"><LuCirclePlus /></button>
                    <button className={style.btn} onClick={() => { setmenubar(!menubar) }} aria-label="More options"><FiMoreVertical /></button>
                    {menubar && (
                        <div className={style.menuDropdownCard}>
                            <button className={style.menu_btn}>
                                <CiLock size={30} /> {/* Reduced size slightly to match standard icon proportions */}
                                <span>Status Privacy</span>
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* Scrollable container zone */}
            <div className={style.statusContent}>
                {/* My Status Section */}
                <div className={style.profileSection}>
                    <div className={style.myStatusRing}>
                        <div className={style.avatarPlaceholder}>M</div>
                        <div className={style.plusBadge}>+</div>
                    </div>
                    <div className={style.statusTextDetails}>
                        <h3>My Status</h3>
                        <span>Click to add status update</span>
                    </div>
                </div>

                {/* Subheading Splitter Section */}
                <div className={style.sectionDivider}>
                    <span>RECENT UPDATES</span>
                </div>

                {/* Recent Updates Context Stream */}
                <div className={style.updatesList}>
                    {updates.map((user) => (
                        <div key={user.id} className={style.statusRowItem}>
                            {/* Green ring when unviewed, muted when viewed */}
                            <div className={`${style.statusRing} ${user.viewed ? style.viewed : style.unviewed}`}>
                                <div className={style.avatarPlaceholder}>{user.initial}</div>
                            </div>
                            <div className={style.statusTextDetails}>
                                <h3>{user.name}</h3>
                                <span className={style.timeSpan}>{user.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Status