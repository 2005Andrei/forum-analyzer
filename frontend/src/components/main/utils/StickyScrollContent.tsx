"use client";
import { StickyScroll } from "../../ui/sticky-scroll";

const content = [
    {
        title: "1. Idea first",
        description:
            "arata cam nasol pagina asta, adk as mai vrea sa pun un efect cv pe fundal, sunt multe buguri momentan",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                Some amazing stuff
            </div>
        ),
    },
    {
        title: "2. Ideaa second",
        description:
            "wish i had lorem generator rn wait i do: Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut isi ut aliquip ex ea commodo consequat. Duis aute ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                More amazing stuff
            </div>
        ),
    },
    {
        title: "3. Idea third",
        description:
            "wish i had lorem generator rn wait i do: Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut isi ut aliquip ex ea commodo consequat. Duis aute ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                Not amazing
            </div>
        ),
    },
    {
        title: "Running out of ideas",
        description:
            "Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. Ut isi ut aliquip ex ea commodo consequat. Duis aute ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
        content: (
            <div className="mt-5 flex h-full w-full items-center justify-center text-white">
                Not good
            </div>
        ),
    },
];
export default function StickyScrollContent() {
    return <StickyScroll content={content} />;
}
