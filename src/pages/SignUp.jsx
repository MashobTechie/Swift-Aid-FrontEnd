/* eslint-disable no-unused-vars */
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import UseShowPassword from "../hooks/UseShowPassword";

const SignUp = () => {
  const { signup } = useAuth();
  const { showPassword, handleShowPassword } = UseShowPassword();

  const formik = useFormik({
    // Initial values
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },

    // form Validations
    validationSchema: Yup.object({
      firstname: Yup.string().required("Firstname is required"),
      lastname: Yup.string().required("Lastname is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Minimum of 6 characters"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await signup(values);
    },
  });

  return <div>Signup Form</div>;
};

export default SignUp;
