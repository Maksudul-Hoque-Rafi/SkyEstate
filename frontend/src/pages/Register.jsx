import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import apiRequest from "../lib/apiRequest";
import SubmitButton from "../components/SubmitButton";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleForm = async (formData) => {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="flex">
      <div className="flex-3 flex justify-center items-center">
        <form action={handleForm} className="flex flex-col gap-4 max-w-xs">
          <h1 className="mb-2 text-3xl font-semibold">Create an Account</h1>
          <input
            className="text-sm px-4 py-4 border border-gray-600 rounded-md"
            name="username"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="text-sm px-4 py-4 border border-gray-600 rounded-md"
            name="email"
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="text-sm px-4 py-4 border border-gray-600 rounded-md"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <SubmitButton submitType={"Register"} />
          {error && <p>{error}</p>}
          <Link to="/login" className="text-gray-600 underline text-sm">
            Do you have an account?
          </Link>
        </form>
      </div>
      <div className="flex-2">
        <img src="/bg.png" alt="backgroung image" />
      </div>
    </div>
  );
};

export default Register;
