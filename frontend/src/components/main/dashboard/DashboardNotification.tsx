interface DashboardEntry {
    title: string;
    summary: string;
    link: string;
}

export const DashboardNotification = ({
    data,
}: {
    data: DashboardEntry[];
}) => {};
