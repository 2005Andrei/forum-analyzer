import { useEffect, useRef, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import graphData from "../../../../assets/mock-data.json";

export default function Board() {
    const nodes = graphData["nodes"];
    const edges = graphData["links"];

    const [selectedNode, setSelectedNode] = useState(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                width: containerRef.current.clientWidth,
                height: containerRef.current.clientHeight,
            });
        }
    }, []);

    const getNodeColor = (type) => {
        const colors = {
            Person: "#3b82f6",
            Company: "#f59e0b",
            CourtCase: "#ef4444",
            Document: "#10b981",
            SocialProfile: "#d946ef",
            Media: "#6366f1",
        };
        return colors[type] || "#9ca3af";
    };

    return (
        <>
            <div className="relative w-full h-full">
                <div
                    className="flex-1 relative bg-purple-950 w-full h-full"
                    ref={containerRef}
                >
                    <ForceGraph2D
                        width={dimensions.width}
                        height={dimensions.height}
                        graphData={graphData}
                        nodeLabel="label"
                        nodeColor={(node) => getNodeColor(node.type)}
                        nodeRelSize={6}
                        linkColor={() => "#cbd5e1"}
                        linkWidth={2}
                        onNodeClick={(node) => setSelectedNode(node)}
                        linkCanvasObjectMode={() => "after"}
                        linkCanvasObject={(link, ctx) => {
                            const MAX_FONT_SIZE = 4;
                            const LABEL_NODE_MARGIN = 12;
                            const start = link.source;
                            const end = link.target;

                            if (
                                typeof start !== "object" ||
                                typeof end !== "object"
                            )
                                return;

                            const textPos = Object.assign(
                                ...["x", "y"].map((c) => ({
                                    [c]: start[c] + (end[c] - start[c]) / 2,
                                })),
                            );

                            ctx.font = `${MAX_FONT_SIZE}px Sans-Serif`;
                            ctx.fillStyle = "gray";
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            ctx.fillText(link.label, textPos.x, textPos.y);
                        }}
                    />
                </div>
            </div>

            {selectedNode && (
                <div className="absolute bottom-10 right-5 w-96 bg-gray-800 border-l border-slate-200 p-6 shadow-xl overflow-y-auto">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                {selectedNode.type}
                            </span>
                            <h2 className="text-2xl font-bold text-white-900 mt-1">
                                {selectedNode.label}
                            </h2>
                        </div>
                        <button
                            onClick={() => setSelectedNode(null)}
                            className="text-white-400 hover:text-red-700 transition-all ease-in hover:cursor-pointer"
                        >
                            x
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm font-semibold text-white-700 mb-1">
                                Summary
                            </h3>
                            <p className="text-sm text-white-600 leading-relaxed">
                                {selectedNode.summary}
                            </p>
                        </div>

                        {selectedNode.url !== "N/A" && (
                            <div>
                                <h3 className="text-sm font-semibold text-white-700 mb-1">
                                    Source:
                                </h3>
                                <a
                                    href={selectedNode.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm text-blue-600 hover:underline break-all"
                                >
                                    {selectedNode.url}
                                </a>
                            </div>
                        )}

                        <div className="mt-8 pt-4 border-t border-slate-100">
                            <span className="text-xs text-slate-400">
                                ID: {selectedNode.id}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
