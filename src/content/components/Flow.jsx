import { useCallback, StrictMode, useEffect } from 'react';

import {
  Background,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

function Flow({ initialNodes, initialEdges }) {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <div className="not-content" style={{ width: '80%', height: '100vh' }}>
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

function App({ initialNodes, initialEdges }) {
    return (<StrictMode><Flow {...{initialNodes, initialEdges}} /></StrictMode>)
}


export default App;