import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import TopNav from './components/TopNav';
import VideoGrid from './components/VideoGrid';
import RightSidebar from './components/RightSidebar';
import CustomCursor from './components/CustomCursor';
import mockData from './data/mockData.json';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Latest News');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering logic
  const filteredData = mockData.filter(video => {
    // 1. Filter by search query
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.source.toLowerCase().includes(searchQuery.toLowerCase());

    // 2. Filter by tab
    let matchesTab = true;
    if (activeTab !== 'Latest News' && activeTab !== 'More') {
      // Assuming tab names map directly to categories, or 'Latest News' means all
      matchesTab = video.category.toLowerCase() === activeTab.toLowerCase();
    }

    return matchesSearch && matchesTab;
  });

  return (
    <>
      <CustomCursor />
      <div className="app-layout">
        {/* Sidebar Gauche */}
        <LeftSidebar />

        {/* Zone Centrale */}
        <main className="main-feed">
          <TopNav
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="dashboard-content">
            <VideoGrid videos={filteredData} activeTab={activeTab} />
          </div>
        </main>

        {/* Sidebar Droite */}
        <aside className="sidebar-right">
          <RightSidebar videos={filteredData} activeTab={activeTab} />
        </aside>
      </div>
    </>
  );
}

export default App;
