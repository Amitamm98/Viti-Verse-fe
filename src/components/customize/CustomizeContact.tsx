import BubbleBackground from "../common/BubbleBackground";
import LeftImg from "../../assets/images/animeTshirt.webp";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CustomizeContact: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  // Validation Schemas
  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const registerSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  });

  // Handle Login Submit
  interface LoginValues {
    email: string;
    phone: string;
  }

  const handleLogin = (values: LoginValues, { resetForm }: { resetForm: () => void }) => {
    // Use the values parameter, e.g., log it or send to API
    console.log("Login values:", values);
    setSuccessMessage("Login successful! ");
    resetForm();
  };

  // Handle Register Submit
  interface RegisterValues {
    name: string;
    email: string;
    phone: string;
    password: string;
  }

  const handleRegister = (
    values: RegisterValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    // Use the values parameter, e.g., log it or send to API
    console.log("Register values:", values);
    setSuccessMessage("Registration successful! You can now login.");
    resetForm();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <BubbleBackground />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl bg-gray-800/60 backdrop-blur-md rounded-lg shadow-lg p-8">
        {/* Left Section - T-shirt Preview */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={LeftImg}
            alt="T-shirt"
            className="rounded-lg shadow-lg max-h-[500px]"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => {
                setIsLogin(true);
                setSuccessMessage("");
              }}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                isLogin ? "bg-purple-600 text-white" : "bg-gray-700"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setSuccessMessage("");
              }}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                !isLogin ? "bg-purple-600 text-white" : "bg-gray-700"
              }`}
            >
              Register
            </button>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="p-3 mb-4 text-green-300 bg-green-800/30 rounded-md border border-green-500">
              {successMessage}
            </div>
          )}

          {isLogin ? (
            // Login Form
            <Formik
              initialValues={{ email: "", phone: "" }}
              validationSchema={loginSchema}
              onSubmit={handleLogin}
            >
              {() => (
                <Form className="space-y-4">
                  <h2 className="text-2xl font-bold">Login to Customize</h2>
                  <p className="text-sm text-gray-300">Join us and tell your story</p>

                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Please enter your email"
                      className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field
                      type="tel"
                      name="phone"
                      placeholder="Please enter your phone number"
                      className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold"
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          ) : (
            // Register Form
            <Formik
              initialValues={{ name: "", email: "", phone: "", password: "" }}
              validationSchema={registerSchema}
              onSubmit={handleRegister}
            >
              {() => (
                <Form className="space-y-4">
                  <h2 className="text-2xl font-bold">Register to Customize</h2>
                  <p className="text-sm text-gray-300">Create your account to get started</p>

                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Please enter your name"
                      className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Please enter your email"
                      className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field
                      type="tel"
                      name="phone"
                      placeholder="Please enter your phone number"
                      className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Please enter your password"
                      className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold"
                  >
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizeContact;
