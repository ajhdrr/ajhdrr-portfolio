import { Routes, Route } from "react-router-dom";

import CSPage from "./pages/CSPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CSPage />} />
      <Route path="/CS" element={<CSPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;