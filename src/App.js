import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { default as AvailableTools } from './data/AvailableTools';

import Navbar from "./common/Navbar";
import ToolShowcase from "./pages/ToolShowcase";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ToolShowcase availableTools={AvailableTools} />} />
            {
              AvailableTools.map((tool, key) => {
                return <Route key={key} path={tool.route} element={React.createElement(tool.component)} />
              })
            }
            <Route
              path="*"
              element={
                <h2>404 I dont have this tool</h2>
              }
            />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
