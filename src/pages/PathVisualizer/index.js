import React, { useState, useEffect } from "react";
import Node from "../../components/Node";
import "./styles.css";

export default function PathVisualizer() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const nodeAux = [];

    for (let row = 0; row < 50; row++) {
      const currentRow = [];

      for (let col = 0; col < 15; col++) {
        const currentNode = {
          row,
          col,
        };
        currentRow.push(currentNode);
      }
      nodeAux.push(currentRow);
    }

    setNodes(nodeAux);
  }, []);

  return (
    <div className="Page">
      {nodes.map((row, rowI) => {
        return (
          <div key={rowI}>
            {row.map((noh, nohI) => (
              <Node key={nohI}></Node>
            ))}
          </div>
        );
      })}
    </div>
  );
}
