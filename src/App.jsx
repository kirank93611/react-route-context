// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import "./App.css";
// import { Suspense, lazy } from "react";
// // import { Dashboard } from "./components/Dashboard";
// // import { Landing } from "./components/Landing";
// const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
// const Landing = lazy(() => import("./components/Landing.jsx"));
// function App() {
//   //suspense API
//   return (
//     <div>
//       <BrowserRouter>
//         <Topbar />
//         <Routes>
//           <Route
//             path="/dashboard"
//             element={
//               <Suspense>
//                 <Dashboard />
//               </Suspense>
//             }
//           ></Route>
//           <Route
//             path="/"
//             element={
//               <Suspense>
//                 <Landing />
//               </Suspense>
//             }
//           ></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Topbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>
//         {/* //Landing */}
//         <button
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           Landing Page
//         </button>
//         {/* Dashboard */}
//         <button
//           onClick={() => {
//             navigate("/dashboard");
//           }}
//         >
//           Dashboard
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

//context API

// import { count } from "console";
import { useContext, useState } from "react";
import { countContext } from "./context";
import { set } from "mongoose";

// function App() {
//   const [count, setCount] = useState(0);

//   //wrap anyone (component) wants to use the teleported value inside a provider
//   return (
//     <div>
//       <countContext.Provider value={{ count, setCount }}>
//         <Count />
//       </countContext.Provider>
//     </div>
//   );
// }

// function Count() {
//   const setCount = useContext(countContext);
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons setCount={setCount} />
//     </div>
//   );
// }

// function CountRenderer() {
//   const count = useContext(countContext);

//   return <div>{count}</div>;
// }

// function Buttons() {
//   const { count, setCount } = useContext(countContext);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>

//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrement
//       </button>
//     </div>
//   );
// }

//recoiil

import { RecoilRoot, recoil, useRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
function App() {
  const [count, setCount] = useState(0);

  //wrap anyone (component) wants to use the teleported value inside a provider
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  return (
    <div>
      <RecoilRoot>
        <CountRenderer />
        <Buttons />
      </RecoilRoot>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>{count}</div>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default App;
