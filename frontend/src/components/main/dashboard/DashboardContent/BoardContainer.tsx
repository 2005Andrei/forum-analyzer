import Board from "./Board";

export default function BoardContainer({ activeBoard }) {
    const renderBoard = () => {
        switch (activeBoard) {
            case "graph":
                return <Board />;
            case "table":
                console.log("tables");
                return (
                    <div className="w-full h-full grid place-items-center">
                        tables
                    </div>
                );
            case "reports":
                console.log("reports");
                return (
                    <div className="w-full h-full grid place-items-center">
                        reports
                    </div>
                );
            default:
                return <Board />;
        }
    };

    return <main className="flex-1 w-full h-full">{renderBoard()}</main>;
}
