/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";

import "./App.css";
import SignUp from "./pages/SignUp";
import AuthProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client/auth/signup" element={<SignUp/>}/>
          </Routes>
          <ToastContainer/>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
