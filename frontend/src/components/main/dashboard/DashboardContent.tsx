import { useState } from "react";
import Board from "./DashboardContent/Board";
import DashboardNav from "./DashboardContent/DashboardNav";
import BoardContainer from "./DashboardContent/BoardContainer";

export default function DashboardContent() {
    const data = [
        { id: "graph", text: "Graphs" },
        { id: "table", text: "Table" },
        { id: "reports", text: "Reports" },
    ];

    const [activeBoard, setActiveBoard] = useState("graph");

    return (
        <div className="w-full h-screen">
            <DashboardNav
                data={data}
                activeBoard={activeBoard}
                setActiveBoard={setActiveBoard}
            />
            <BoardContainer activeBoard={activeBoard} />
        </div>
    );
}
