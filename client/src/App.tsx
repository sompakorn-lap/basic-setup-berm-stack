import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Home.page";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
}

export default App