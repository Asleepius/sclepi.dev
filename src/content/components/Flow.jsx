import { useCallback, StrictMode } from 'react';

import {
  Background,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";


const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

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
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
        >
            <Background />
        </ReactFlow>
    </div>
  );
}

function App() {
    return (<StrictMode><Flow /></StrictMode>)
}


export default App;