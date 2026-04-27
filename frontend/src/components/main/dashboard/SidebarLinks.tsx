"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "../../../lib/utils";

interface linkEntry {
    title: string;
    link: string;
}

// I should genuinely change the effect because it looks horrid
export const SidebarLinks = ({ data }: { data: linkEntry[] }) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "relative inset-0 hidden flex-1 flex-col gap-1 text-sm font-medium text-zinc-400 transition duration-200 hover:text-zinc-200 lg:flex lg:space-x-2",
            )}
        >
            {data.map((item, idx) => (
                <a
                    onMouseEnter={() => setHovered(idx)}
                    onClick={() => console.log("nothing atm")}
                    className="relative flex flex-col px-4 py-2 text-neutral-300 transition delay-100 duration-100 ease-in hover:text-blue-400"
                    key={`link-${idx}`}
                    href={item.link}
                >
                    {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 h-full w-full bg-neutral-800" // motion
                        />
                    )}
                    <span className="relative z-20">{item.title}</span>
                </a>
            ))}
        </motion.div>
    );
};
