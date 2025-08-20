import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaMobileAlt, FaTwitter } from "react-icons/fa";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formKey, setFormKey] = useState(0); // Forces Formik reset

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    ...(isLogin
      ? {}
      : {
          email: Yup.string().email("Invalid email").required("Email is required"),
        }),
  });

  interface AuthFormValues {
    username: string;
    email: string;
    password: string;
    remember: boolean;
  }

  const handleSubmit = (values: AuthFormValues) => {
    console.log("Form Values:", values);
    alert(JSON.stringify(values, null, 2));
  };

  const defaultValues: AuthFormValues = {
    username: "",
    email: "",
    password: "",
    remember: false,
  };

  const switchMode = (loginMode: boolean) => {
    setIsLogin(loginMode);
    setFormKey((prev) => prev + 1); // Reset form when toggling
  };

  return (
    <div
      className="min-h-screen flex items-start justify-center pt-20 pb-20"
      style={{
        background:
          "linear-gradient(135deg, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Avatar */}
        <div className="flex justify-center mb-6 cursor-pointer" onClick={() => switchMode(!isLogin)}>
          <div className="bg-white/20 p-4 rounded-full">
            <FaUser className="text-white text-3xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-center text-2xl font-semibold mb-6">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {/* Formik Form */}
        <Formik
          key={formKey} // Forces reset
          initialValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            {/* Username */}
            <div className="flex items-center bg-white/20 rounded px-3">
              <FaUser className="text-white mr-3" />
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="bg-transparent w-full text-white py-2 outline-none placeholder-white/70"
              />
            </div>
            <ErrorMessage name="username" component="div" className="text-red-300 text-sm" />

            {/* Email (only for register) */}
            {!isLogin && (
              <>
                <div className="flex items-center bg-white/20 rounded px-3">
                  <FaUser className="text-white mr-3" />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent w-full text-white py-2 outline-none placeholder-white/70"
                  />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-300 text-sm" />
              </>
            )}

            {/* Password */}
            <div className="flex items-center bg-white/20 rounded px-3">
              <FaLock className="text-white mr-3" />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="bg-transparent w-full text-white py-2 outline-none placeholder-white/70"
              />
            </div>
            <ErrorMessage name="password" component="div" className="text-red-300 text-sm" />

            {/* Remember + Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between text-white/80 text-sm">
                <label className="flex items-center gap-2">
                  <Field type="checkbox" name="remember" />
                  Remember me
                </label>
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-500 transition text-white py-2 rounded shadow-md"
            >
              {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
            </button>

            {/* Social Buttons (Vertical) */}
            <div className="flex flex-col gap-3 mt-4">
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded"
              >
                <FaGoogle /> Continue with Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                <FaFacebookF /> Continue with Facebook
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-600 text-white py-2 rounded"
              >
                <FaTwitter /> Continue with Twitter
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-2 rounded"
              >
                <FaMobileAlt /> Continue with Mobile
              </button>
            </div>

            {/* Toggle Login/Create */}
            <p className="text-center text-white/80 mt-4">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode(false)}
                    className="text-pink-300 hover:underline"
                  >
                    Create one
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchMode(true)}
                    className="text-pink-300 hover:underline"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </Form>
        </Formik>
      </motion.div>
    </div>
  );
};

export default AuthForm;
