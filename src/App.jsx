import { useRef, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import HomePage from "./pages/Home/HomePage";
import CSPage from "./pages/CSPage";
import PhotoWIP from "./pages/PhotoWIP";
import NotFoundPage from "./pages/NotFoundPage";

import "./transitions.css";

const PAGE_ORDER = { "/": 0, "/Photography": 1, "/CS": 2 };

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);
  const [direction, setDirection] = useState("right");
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    const prev = PAGE_ORDER[prevPath.current] ?? 0;
    const next = PAGE_ORDER[location.pathname] ?? 0;
    setDirection(next > prev ? "left" : "right");
    prevPath.current = location.pathname;
  }, [location.pathname]);

  return (
    <div style={{ overflow: "hidden" }}>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={400}
          classNames={`slide-${direction}`}
          unmountOnExit
        >
          <div ref={nodeRef}>
            <Routes location={location}>
              <Route path="/"            element={<HomePage />} />
              <Route path="/CS"          element={<CSPage />} />
              <Route path="/Photography" element={<PhotoWIP />} />
              <Route path="*"            element={<NotFoundPage />} />
            </Routes>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;