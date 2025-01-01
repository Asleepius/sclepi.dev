import { useCallback } from 'react';

import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { PositionLoggerNode } from "./PLNode.jsx";

const edgeTypes = {
  // Add your custom edge types here!
}


const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
};


const initialNodes = [
    { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
    {
      id: "b",
      type: "position-logger",
      position: { x: 192, y: 26 },
      data: { label: "drag me!" },
    },
    { id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
    {
      id: "d",
      type: "output",
      position: { x: 0, y: 200 },
      data: { label: "with React Flow" },
    },
];

const initialEdges = [
    { id: "a->c", source: "a", target: "c", animated: true },
    { id: "b->d", source: "b", target: "d" },
    { id: "c->d", source: "c", target: "d", animated: true },
]

function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <div style={{ width: '80%', height: '70vh', margin: 'auto' }}>
        <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        >
            <Background />
            <MiniMap />
            <Controls />
        </ReactFlow>
    </div>
  );
}


export default Flow;