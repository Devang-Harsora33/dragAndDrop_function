import React from "react";

export default function Sidebar({
  nodeName,
  setNodeName,
  selectedNode,
  setSelectedElements,
  onDeleteNode,
}) {
  const handleInputChange = (event) => {
    setNodeName(event.target.value);
  };

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="border-r-2 border-green-200 p-4 text-sm bg-green-100 w-64 h-screen text-black">
      {selectedNode ? (
        // Settings panel
        <div>
          <h3 className="text-xl mb-2 text-green-900">Update Node</h3>
          <label className="block mb-2 text-sm font-medium text-green-900">
            Node Name:
          </label>
          <input
            type="text"
            className="block w-full pt-2 px-3 pb-3 text-gray-700 border border-green-300 rounded-lg bg-white focus:outline-none focus:border-green-500"
            value={nodeName}
            onChange={handleInputChange}
          />
          <button
            className="mt-4 bg-green-500 text-white rounded p-2 hover:bg-green-600"
            onClick={() => setSelectedElements([])}
          >
            Go Back
          </button>
          <button
            className="mt-2 ml-2 bg-red-500 text-white rounded p-2 hover:bg-red-600"
            onClick={onDeleteNode}
          >
            Delete Node
          </button>
        </div>
      ) : (
        // Node panel
        <>
          <h3 className="text-xl mb-4 text-green-900">Nodes Panel</h3>
          <h5 className="text-sm pb-8 mb-4 text-green-900">(Drag and Drop)</h5>
          <div
            className="bg-white p-3 border-2 border-green-500 rounded cursor-move flex justify-center items-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-200 mb-2"
            onDragStart={(event) => onDragStart(event, "textnode")}
            draggable
          >
            Custom Message Node
          </div>
          <div
            className="bg-white p-3 border-2 border-blue-500 rounded cursor-move flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200 mb-2"
            onDragStart={(event) => onDragStart(event, "imagenode")}
            draggable
          >
            Image Node
          </div>
          <div
            className="bg-white p-3 border-2 border-red-500 rounded cursor-move flex justify-center items-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
            onDragStart={(event) => onDragStart(event, "videonode")}
            draggable
          >
            Video Node
          </div>
          <div
            className="bg-white p-3 mt-2 border-2 border-yellow-500 rounded cursor-move flex justify-center items-center text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors duration-200"
            onDragStart={(event) => onDragStart(event, "variablenode")}
            draggable
          >
            Variable Node
          </div>
        </>
      )}
    </aside>
  );
}
