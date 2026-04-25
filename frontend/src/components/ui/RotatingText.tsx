"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface RotatingTextProps {
    texts: string[];
    interval?: number;
    fadeDuration?: number;
    className?: string;
}

export default function RotatingText({
    texts,
    interval = 2500,
    fadeDuration = 0.6,
    className = "",
}: RotatingTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => clearInterval(timer);
    }, [texts.length, interval]);

    if (!texts || texts.length === 0) return null;

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: fadeDuration, ease: "easeInOut" }}
                className={className}
            >
                {texts[index]}
            </motion.span>
        </AnimatePresence>
    );
}
