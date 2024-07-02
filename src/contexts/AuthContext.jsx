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
  const appURL = import.meta.env.SWIFTAID_BACKEND_URL;

  //   States
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log("Token in authentication", token);

  const signup = async (userData) => {
    setLoading(true);
    axios
    .post(`${appURL}/auth/signup`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then ((response) => {
        console.log(response.userData);
        setToken(response.data.userData.token)
        setUser(response.data.userData.user)
        localStorage.setItem('token',response.data.userData.token )
        localStorage.setItem('user', response.data.userData.user)
        toast.success("Signup Successful");
        navigate("/");
    })
    .catch((error) => {
        console.log(error);
        error?.response
          ? toast.error(error.response.data.message)
          : toast.error("An Error occured");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const values = {
    loading,
    token,
    user,
    signup,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
