"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const MOCK_USER = {
  email: "demo@postly.com",
  password: "123456",
};
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      document.cookie = "loggedIn=true; path=/;";
      router.push("/all-trees");
      toast.success('Logged in successfully!')
    } else {
      toast.error("Invalid email or password")
    }
  };

  return (
    <div className="min-h-[60vh] flex justify-center items-center">
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleSubmit}
      >
        <legend className="fieldset-legend text-xl font-semibold mb-2">
          Login
        </legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="label pt-2">Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-neutral mt-4 w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
