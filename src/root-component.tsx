import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "./styles/main.scss";

function RootComponent() {
  return (
    <div className="app">
      <div className="app-content">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default RootComponent;
