import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Eye, Clock, ExternalLink } from 'lucide-react';
import './VideoCard.css';

const VideoCard = ({ video, variant = 'standard' }) => {
    const getCategoryClass = (category) => {
        switch (category.toLowerCase()) {
            case 'infrastructure': return 'cat-infra';
            case 'agents': return 'cat-agents';
            case 'vibecoding': return 'cat-vibecoding';
            default: return '';
        }
    };

    // Card entry animation logic
    // For standard and compact, we let the parent container stagger them.
    // For hero, we want a specific initial entrance.
    const isHero = variant === 'hero';

    const itemVariants = isHero ? {
        // Hero entry
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    } : {
        // Standard/Compact entry (controlled by parent stagger)
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    };

    return (
        <motion.a
            href={video.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`video-card variant-${variant}`}
            variants={itemVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.25, ease: "easeOut" }
            }}
        >
            <div className="card-image-container">
                <motion.img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="card-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                />
                {variant !== 'compact' && (
                    <div className="image-overlay">
                        <PlayCircle size={variant === 'hero' ? 64 : 32} className="play-icon" />
                    </div>
                )}
                {variant !== 'compact' && (
                    <div className="duration-badge">
                        <Clock size={12} /> {video.duration}
                    </div>
                )}
                <div className="external-link-badge">
                    <ExternalLink size={14} />
                </div>
            </div>

            <div className="card-content">
                <div className="card-top-meta">
                    <div className={`category-badge ${getCategoryClass(video.category)}`}>
                        {video.category}
                    </div>
                </div>

                <div className="card-header">
                    <h2 className="card-title">{video.title}</h2>
                    {variant !== 'compact' && <p className="card-summary">{video.summary}</p>}
                </div>

                <div className="card-footer">
                    <div className="channel-info">
                        <img src={video.channelAvatar} alt={video.source} className="channel-avatar" />
                        <span className="channel-name">{video.source} <span className="post-time">• 2h ago</span></span>
                    </div>
                    {variant !== 'compact' && (
                        <div className="views-info">
                            <Eye size={14} className="views-icon" />
                            <span>{video.views}</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.a>
    );
};

export default VideoCard;
