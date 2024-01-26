import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const Landing = lazy(() => import("./components/Landing.jsx"));
function App() {
  //suspense API
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Topbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        {/* //Landing */}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing Page
        </button>
        {/* Dashboard */}
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default App;
