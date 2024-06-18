import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./assets/components/navbar/Navbar";

function App({ children }) {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
