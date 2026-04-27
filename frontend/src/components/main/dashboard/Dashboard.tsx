import DashboardSidebar from "./DashboardSidebar";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "../../ui/resizable";
import DashboardContent from "./DashboardContent";

export default function Dashboard() {
    // no more reddit, atm I need some mock data to represent as nodes
    // first off I need some good data
    //
    //
    // structure:
    //  1. node types as labels: person, companies, court case, document, media, social profile
    //  2. edge types: administration, (person -> company), angajat, beneficiar, stake holder
    //                 detine -> social media
    //                 judeca
    //                 mentionat in

    return (
        <div className="w-full h-screen">
            <ResizablePanelGroup orientation="horizontal">
                <ResizablePanel defaultSize="25%" maxSize="35%" minSize="10%">
                    <DashboardSidebar />
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel>
                    <DashboardContent />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
}
