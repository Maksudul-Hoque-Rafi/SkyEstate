import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import apiRequest from "../lib/apiRequest";
import SubmitButton from "../components/SubmitButton";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleForm = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const response = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      updateUser(response.data);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };
  return (
    <div className="flex">
      <div className="flex-3 flex justify-center items-center">
        <form action={handleForm} className="flex flex-col gap-4 max-w-xs">
          <h1 className="mb-2 text-3xl font-semibold">Welcome Back!</h1>
          <input
            className="text-sm px-4 py-4 border border-gray-600 rounded-md"
            name="username"
            type="text"
            placeholder="Username"
            onChange={() => setError("")}
          />

          <input
            className="text-sm px-4 py-4 border border-gray-600 rounded-md"
            name="password"
            type="password"
            placeholder="Password"
            onChange={() => setError("")}
          />
          <SubmitButton submitType={"Login"} />
          {error && <p>{error}</p>}
          <Link to="/register" className="text-gray-600 underline text-sm">
            Don't you have an account?
          </Link>
        </form>
      </div>
      <div className="flex-2">
        <img src="/bg.png" alt="backgroung image" />
      </div>
    </div>
  );
};

export default Login;
