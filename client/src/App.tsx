import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/1" element={<h1>Test</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App