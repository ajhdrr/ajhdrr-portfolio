import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CSPage from "./pages/CSPage";
import Photography from "./pages/Photography";
import NotFoundPage from "./pages/NotFoundPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CS" element={<CSPage />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;