import { Bell, ExpandIcon, LayoutDashboard, Settings } from "lucide-react";
import "./css/sidebar.css";
import { SidebarLinks } from "./SidebarLinks";
import { Search, Download } from "lucide-react";

export default function DashboardSidebar() {
    const data = [
        {
            title: "Search",
            link: "/search",
            icon: Search,
        },
        {
            title: "jobs",
            link: "/jobs",
            icon: ExpandIcon,
        },
        {
            title: "export data",
            link: "/export",
            icon: Download,
        },
        {
            title: "settings",
            link: "/settings",
            icon: Settings,
        },
    ];

    return (
        <div className="flex h-screen w-full flex-col bg-background/95 p-4">
            <div className="mb-6 flex items-center gap-2 px-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <LayoutDashboard className="size-4" />
                </div>
                <span className="font-semibold tracking-tight">Workspace</span>
            </div>

            <SidebarLinks data={data} />

            <hr className="my-6 border-border/50" />

            <div className="flex-1 overflow-y-auto px-2">
                <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Notifications
                    </h2>
                    <Bell className="size-3 text-muted-foreground" />
                </div>

                <div className="group relative rounded-xl border border-border/50 bg-muted/30 p-4 transition-colors hover:bg-muted/50">
                    <h3 className="mb-1 text-sm font-semibold text-foreground">
                        Report
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        sth that hapenned in the background - async jobs could
                        be the way
                    </p>
                    <button className="mt-3 text-xs font-medium text-primary hover:underline">
                        View Report &rarr;
                    </button>
                </div>
            </div>

            <div className="mt-auto pt-4">
                <div className="rounded-xl bg-sky-500/10 p-4 border border-sky-500/20 text-sky-600 dark:text-sky-400">
                    <h4 className="text-sm font-semibold mb-1">Plan pro max</h4>
                    <p className="text-xs opacity-80">or something</p>
                </div>
            </div>
        </div>
    );
}
