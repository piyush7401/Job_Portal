import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="/Register" element={<Register></Register>}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
