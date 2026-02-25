import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoCard from './VideoCard';
import './VideoGrid.css';

const VideoGrid = ({ videos, activeTab }) => {
    // Si aucun résultat
    if (!videos || videos.length === 0) {
        return (
            <div className="main-feed-content">
                <div className="empty-state">
                    <h3>Aucun résultat trouvé</h3>
                    <p>Aucune vidéo ne correspond à votre recherche ou catégorie actuelle.</p>
                </div>
            </div>
        );
    }

    const heroVideo = videos[0];
    const standardVideos = videos.slice(1, 3);

    // Stagger animation container
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };

    return (
        <div className="main-feed-content">
            {/* Hero Section */}
            {heroVideo && (
                <div className="hero-section">
                    <VideoCard video={heroVideo} variant="hero" />
                </div>
            )}

            {standardVideos.length > 0 && (
                <>
                    <h3 className="section-title">Latest Updates</h3>

                    {/* Secondary Grid */}
                    <motion.div
                        className="secondary-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        key={activeTab} // Force re-render/re-animate on tab change
                    >
                        <AnimatePresence mode="popLayout">
                            {standardVideos.map(video => (
                                <VideoCard
                                    key={video.id}
                                    video={video}
                                    variant="standard"
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default VideoGrid;
