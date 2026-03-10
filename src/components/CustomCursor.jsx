import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // useSpring for the lag effect
    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            // centering the cursor relative to its dimensions
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const clickableElements = ['A', 'BUTTON', 'INPUT'];

            // Check if hovered element is meant to be clickable
            if (clickableElements.includes(target.tagName) ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.nav-tab') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                x: cursorXSpring,
                y: cursorYSpring,
                width: 16,
                height: 16,
                backgroundColor: 'rgba(37, 99, 235, 0.7)', // Premium Blue
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 99999
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
                opacity: isHovered ? 0.6 : 1
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        />
    );
};

export default CustomCursor;
