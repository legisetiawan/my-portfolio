import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./containers/Profile";

function App() {
  return (
    <>
      <Profile />
    </>
  );
}

export default App;
