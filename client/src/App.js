import { Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/:category" element={<Gallery />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
