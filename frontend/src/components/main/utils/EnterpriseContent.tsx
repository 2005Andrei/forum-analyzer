import TimelineContent from "../../timeline-content";
import { ThreeDMarquee } from "../../ui/3d-image-view";
import { GradualBlur } from "../../ui/GradualBlur";

export default function EnterpriseContent() {
    const images = [
        "https://loremflickr.com/800/600/media?lock=1",
        "https://loremflickr.com/800/600/messaging?lock=2",
        "https://loremflickr.com/800/600/forum?lock=3",
        "https://loremflickr.com/800/600/chat?lock=4",
        "https://loremflickr.com/800/600/network?lock=5",
        "https://loremflickr.com/800/600/socialmedia?lock=6",
        "https://loremflickr.com/800/600/communication?lock=7",
        "https://loremflickr.com/800/600/news?lock=8",
        "https://i.pinimg.com/736x/79/a3/16/79a3168cf52edca304ff32db46e0f888.jpg",
        "https://loremflickr.com/800/600/broadcast?lock=9",
        "https://loremflickr.com/800/600/interview?lock=10",
        "https://i.pinimg.com/736x/79/a3/16/79a3168cf52edca304ff32db46e0f888.jpg",
        "https://loremflickr.com/800/600/community?lock=11",
        "https://loremflickr.com/800/600/texting?lock=12",
        "https://loremflickr.com/800/600/email?lock=13",
        "https://loremflickr.com/800/600/connection?lock=14",
        "https://loremflickr.com/800/600/videochat?lock=15",
        "https://loremflickr.com/800/600/blog?lock=16",
        "https://loremflickr.com/800/600/newsletter?lock=17",
        "https://loremflickr.com/800/600/online?lock=18",
        "https://loremflickr.com/800/600/conversation?lock=19",
        "https://loremflickr.com/800/600/groupchat?lock=20",
        "https://loremflickr.com/800/600/smartphone?lock=21",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4dYNQvhQU2EbfVuxgcHUsU85RU2nzlppeQ&s",
        "https://loremflickr.com/800/600/typing?lock=22",
        "https://loremflickr.com/800/600/app?lock=23",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs4dYNQvhQU2EbfVuxgcHUsU85RU2nzlppeQ&s",
        "https://loremflickr.com/800/600/web?lock=24",
        "https://loremflickr.com/800/600/comments?lock=25",
        "https://loremflickr.com/800/600/discussion?lock=26",
        "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fthis-is-not-cat-v0-2fyhbne8pf1g1.jpeg%3Fauto%3Dwebp%26s%3D1f65fae25931b65f9d081608e2ac8197f47371c1",
    ];

    return (
        <>
            <div className="relative h-screen w-full overflow-y-hidden">
                <div className="pointer-events-none fixed inset-0 z-10 h-full w-full bg-black/90 dark:bg-black/60" />
                <ThreeDMarquee
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    images={images}
                />

                <div className="relative h-screen w-full snap-y snap-mandatory overflow-y-scroll text-white dark:text-black">
                    <div className="grid h-screen snap-center place-items-center">
                        <div className="relative">
                            <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
                                We're so tuff. This service is{" "}
                                <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
                                    ass
                                </span>
                                .
                            </h2>
                            <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
                                Romania is an ahh country lol. More dummy but
                                accurate content. Again, useless text that is
                                long and useless. In fine, dati scroll
                            </p>

                            <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
                                <button className="bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                                    Our cause
                                </button>
                                <button className="border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid h-screen snap-center place-items-center">
                        <section className="relative z-20 grid h-100 w-full place-items-center">
                            <div className="h-full w-200 text-justify text-black dark:text-white">
                                Ma gandeam sa pun aici continut despre
                                dashboard-ul profesional la "enterprise lvl",
                                iar pozele pe fundal ar fi screenshot-uri cu
                                dashboard-uirle profesionale
                                <br /> <br />
                                E destul de kkt dar mna
                                <br /> <br />
                                Navbarul arata urat
                                <br /> <br />
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet,
                            </div>
                        </section>
                    </div>

                    <div className="relative z-20 grid snap-center place-items-center">
                        <TimelineContent />
                    </div>
                </div>
            </div>

            <GradualBlur
                target="parent"
                position="bottom"
                height="7rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential
                opacity={1}
            />
        </>
    );
}
