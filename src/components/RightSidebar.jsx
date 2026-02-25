import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoCard from './VideoCard';
import './RightSidebar.css';

const RightSidebar = ({ videos, activeTab }) => {
    // Les articles au-delà du 3ème vont dans la sidebar
    const trendingVideos = videos ? videos.slice(3, 6) : [];

    // Stagger animation container
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="trending-sections">
            <h3 className="sidebar-title">Trending News</h3>

            <motion.div
                className="compact-list"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                key={activeTab} // Force re-render/re-animate on tab change
            >
                <AnimatePresence mode="popLayout">
                    {trendingVideos.map(video => (
                        <VideoCard
                            key={video.id}
                            video={video}
                            variant="compact"
                        />
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="divider"></div>

            <h3 className="sidebar-title mt-4">Trending Tags</h3>
            <div className="tags-list">
                <span className="tag-pill"><span className="hash">#</span>AgenticWorkflows</span>
                <span className="tag-pill"><span className="hash">#</span>OpenSourceAI</span>
                <span className="tag-pill"><span className="hash">#</span>Vibecoding</span>
                <span className="tag-pill"><span className="hash">#</span>GPU</span>
            </div>
        </div>
    );
};

export default RightSidebar;
