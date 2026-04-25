import { useState } from "react";
import { motion } from "motion/react";
import { World } from "../../ui/globe";
import RotatingText from "../../ui/RotatingText";
import StickyScrollContent from "./StickyScrollContent";

export default function HomeContent() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        {
            order: 1,
            startLat: -5,
            startLng: -20,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
    ];

    const [globeLoaded, setGlobeLoaded] = useState(false);

    return (
        <div className="relative h-screen w-full snap-y snap-mandatory px-10">
            <div className="flex h-screen w-full snap-center flex-col items-center justify-around overflow-y-scroll md:flex-row md:gap-1">
                <div className="relative grid h-full w-full place-items-center md:ml-0.5 md:w-1/3">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        className="div"
                    >
                        <h2 className="text-center text-xl font-bold text-black md:text-4xl dark:text-white">
                            There may be other such tools. But this one is{" "}
                            <RotatingText
                                className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white backdrop-blur-sm"
                                texts={[
                                    "ours",
                                    "shitty",
                                    "spiritually bankrupt",
                                    "yours if you pay",
                                ]}
                            />
                        </h2>
                    </motion.div>
                </div>
                <div className="relative grid h-screen w-full place-items-center p-10 md:w-2/3">
                    {!globeLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-64 w-64 animate-pulse rounded-full bg-neutral-200/50 blur-xl md:h-96 md:w-96 dark:bg-neutral-800/50" />
                        </div>
                    )}
                    <World
                        data={sampleArcs}
                        globeConfig={globeConfig}
                        onReady={() => setGlobeLoaded(true)}
                    />
                </div>
            </div>

            <div className="relative grid h-screen w-full snap-center place-items-center">
                <StickyScrollContent />
            </div>
        </div>
    );
}
