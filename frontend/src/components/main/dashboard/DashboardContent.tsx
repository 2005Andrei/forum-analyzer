import Board from "./DashboardContent/Board";
import DashboardNav from "./DashboardContent/DashboardNav";

export default function DashboardContent() {
    return (
        <div className="w-full h-screen">
            <DashboardNav />
            <Board />
        </div>
    );
}
