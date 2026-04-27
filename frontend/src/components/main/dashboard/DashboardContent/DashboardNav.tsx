interface links {
    text: string;
    call: React.FunctionComponent;
}

export default function DashboardNav({ data, activeBoard, setActiveBoard }) {
    return (
        <header className="w-full flex flex-col">
            <div className="w-full bg-sky-950 px-6 py-4 text-center text-sm font-medium text-white">
                News content
            </div>

            <nav className="w-full flex items-center justify-between gap-5 px-6 py-2">
                <div className="w-full max-w-sm">
                    <input
                        type="text"
                        id="search"
                        placeholder="Search..."
                        className="border-0 bg-transparent/50 border-gray-400 text-black placeholder:text-gray-600 outline-0 text-white border-b-1"
                    />
                </div>

                <ul className="flex w-full items-center justify-end gap-5">
                    {data.map((item, idx) => (
                        <li key={item.id || idx}>
                            <button
                                onClick={() => setActiveBoard(item.id)}
                                className="text-sm font-medium transition-all ease-in duration-100 hover:opacity-70 focus:outline-none focus-visible:ring-sky-950 hover:cursor-pointer"
                            >
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
