import React from 'react';
import {
    Database, Zap, Code,
    LayoutDashboard, Film, Music, Plane,
    User, Settings, HelpCircle, LogOut
} from 'lucide-react';
import './LeftSidebar.css';

const LeftSidebar = () => {
    return (
        <aside className="sidebar-left">
            <div className="sidebar-header">
                <div className="logo-container">
                    <Zap className="logo-icon" size={24} />
                    <h1 className="logo-text">DivinAI</h1>
                </div>
            </div>

            <div className="sidebar-profile">
                <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                    alt="Profile"
                    className="profile-avatar"
                />
                <div className="profile-info">
                    <span className="profile-name">Admin User</span>
                    <span className="profile-plan">Premium Plan</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-group">
                    <a href="#" className="nav-item">
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="nav-item active">
                        <Database size={18} />
                        <span>News & Updates</span>
                    </a>
                    <a href="#" className="nav-item">
                        <Zap size={18} />
                        <span>Agentic Workflows</span>
                    </a>
                    <a href="#" className="nav-item">
                        <Code size={18} />
                        <span>Vibecoding</span>
                    </a>
                </div>

                <div className="nav-divider"></div>

                <div className="nav-group secondary-nav">
                    <a href="#" className="nav-item"><User size={16} /> Account</a>
                    <a href="#" className="nav-item"><Settings size={16} /> Settings</a>
                    <a href="#" className="nav-item"><HelpCircle size={16} /> Help & Support</a>
                    <a href="#" className="nav-item logout"><LogOut size={16} /> Log Out</a>
                </div>
            </nav>
        </aside>
    );
};

export default LeftSidebar;
