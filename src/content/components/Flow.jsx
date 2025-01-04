import { useCallback, StrictMode, useEffect } from 'react';

import {
  Background,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

function Flow({ nodes, edges }) {
  const [n, , onNodesChange] = useNodesState(nodes);
  const [e, setEdges, onEdgesChange] = useEdgesState(edges);
  const onConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <div className="not-content" style={{ width: '100%', height: '100vh' }}>
        <ReactFlow
            nodes={n}
            edges={e}
            fitView
            proOptions={
              {hideAttribution: true}
            }
        />
    </div>
  );
}

function App({ nodes, edges }) {
    return (<StrictMode><Flow {...{nodes, edges}} /></StrictMode>)
}


export default App;