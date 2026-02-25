import React from 'react';
import { Search, Bell, MessageSquare } from 'lucide-react';
import './TopNav.css';

const TopNav = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
    const tabs = ['Latest News', 'Infrastructure', 'Agents', 'Vibecoding'];

    return (
        <div className="top-nav">
            <div className="top-nav-tabs">
                {tabs.map(tab => (
                    <span
                        key={tab}
                        className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </span>
                ))}
            </div>

            <div className="top-nav-actions">
                <div className="icon-group">
                    <div className="icon-button notification-icon">
                        <Bell size={18} />
                        <span className="notification-dot"></span>
                    </div>
                    <div className="icon-button">
                        <MessageSquare size={18} />
                    </div>
                </div>

                <div className="search-bar">
                    <Search size={16} className="text-tertiary" />
                    <input
                        type="text"
                        placeholder="Type to search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default TopNav;
