import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import CSPage from "./pages/CSPage";
import Photography from "./pages/Photography";
import PhotoWIP from "./pages/PhotoWIP";
import NotFoundPage from "./pages/NotFoundPage";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CS" element={<CSPage />} />
        <Route path="/Photography" element={<PhotoWIP />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;