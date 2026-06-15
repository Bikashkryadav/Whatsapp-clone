import React, { useState } from 'react'
import style from "./style/chatlist.module.css"
import { LuSquarePlus, LuSearch } from 'react-icons/lu' 
import { FiMoreVertical } from 'react-icons/fi'
import { IoPersonSharp } from 'react-icons/io5';
function Chatslist() {
     const dummyChats = [
        { id: 1, name: 'Alex', message: 'Hey, are we still on for today?', time: '11:45 AM', unread: 2, favorite: false },
        { id: 2, name: 'Project Group', message: 'Updated the repository', time: '10:12 AM', unread: 0, favorite: true },
        { id: 3, name: 'Sarah', message: 'Got it, thanks!', time: 'Yesterday', unread: 0, favorite: true },
    ];

    // 2. State for tracking search queries and active filter pills
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'unread' | 'favorites'

    // 3. Filter logic combining both the search text and the filter buttons
    const filteredChats = dummyChats.filter(chat => {
        const matchesSearch = chat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              chat.message.toLowerCase().includes(searchQuery.toLowerCase());
        
        if (!matchesSearch) return false;
        if (activeFilter === "unread") return chat.unread > 0;
        if (activeFilter === "favorites") return chat.favorite;
        return true; // 'all'
    });
    return (
        <>
            <header className={style.header}>
                <div className={style.left_header}>
                    <h2>WhatsApp</h2>
                </div>
                <div className={style.right_header}>
                    <button aria-label="New chat"><LuSquarePlus /></button>
                    <button aria-label="Menu"><FiMoreVertical /></button>
                </div>
            </header>

            {/* Search Bar Section */}
            <div className={style.searchContainer}>
                <div className={style.searchWrapper}>
                    <LuSearch className={style.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search or start a new chat"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={style.searchInput}
                    />
                </div>
            </div>

            {/* Filter Navigation Pills */}
            <div className={style.filterContainer}>
                <button
                    className={`${style.filterPill} ${activeFilter === 'all' ? style.activePill : ''}`}
                    onClick={() => setActiveFilter('all')}
                >
                    All
                </button>
                <button
                    className={`${style.filterPill} ${activeFilter === 'unread' ? style.activePill : ''}`}
                    onClick={() => setActiveFilter('unread')}
                >
                    Unread
                </button>
                <button
                    className={`${style.filterPill} ${activeFilter === 'favorites' ? style.activePill : ''}`}
                    onClick={() => setActiveFilter('favorites')}
                >
                    Favorites
                </button>
            </div>

            {/* Render filtered chat items */}
            <div className={style.chatList}>
                {filteredChats.length > 0 ? (
                    filteredChats.map((chat) => (
                        <div key={chat.id} className={style.chatItem}>
                            <div className={style.avatar}><IoPersonSharp size={20} /></div>
                            <div className={style.chatInfo}>
                                <div className={style.chatRow}>
                                    <span className={style.name}>{chat.name}</span>
                                    <span className={style.time}>{chat.time}</span>
                                </div>
                                <div className={style.chatRow}>
                                    <p className={style.message}>{chat.message}</p>
                                    {chat.unread > 0 && (
                                        <span className={style.unreadBadge}>{chat.unread}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={style.noChats}>No chats found</div>
                )}
            </div>
        </>
    )
}

export default Chatslist
