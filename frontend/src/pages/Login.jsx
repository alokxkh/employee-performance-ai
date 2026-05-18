import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    const res = await API.post("/auth/login", form);

    localStorage.setItem("token", res.data.token);

    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={submit}>
        <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} />
        <button>Login</button>
      </form>

      <Link to="/">Signup</Link>
    </div>
  );
}

export default Login;