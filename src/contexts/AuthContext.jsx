/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const appURL = import.meta.env.VITE_SWIFTAID_BACKEND_URL;

  // States
  const [loading, setLoading] = useState(false);
  const [verification_token, setVerificationToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("verification_token");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedToken && storedUser) {
      setVerificationToken(storedToken);
      setUser(storedUser);
      console.log("Stored token:", storedToken);
      console.log("Stored user:", storedUser);
    } else {
      console.log("No stored token or user found.");
    }
  }, []);

  console.log("Token in authentication", verification_token);
  console.log("Backend URL:", appURL);
  const signup = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${appURL}/auth/signup`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Signup response data:", response.data);
      const { verification_token, user } = response.data.userData;
  
      // Set verification_token and user in state
      setVerificationToken(verification_token);
      setUser(user);
  
      // Store verification_token and user in localStorage
      localStorage.setItem("verification_token", verification_token);
      localStorage.setItem("user", JSON.stringify(user));
  
      toast.success("Signup Successful");
      navigate("/");
    } catch (error) {
      console.log("Signup error:", error);
      error?.response
        ? toast.error(error.response.data.message)
        : toast.error("An Error occurred");
    } finally {
      setLoading(false);
    }
  };
  

  const values = {
    loading,
    verification_token,
    user,
    signup,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
