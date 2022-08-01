import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import Edit from "./Edit";
import Create from './Create'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
    </div>
);
