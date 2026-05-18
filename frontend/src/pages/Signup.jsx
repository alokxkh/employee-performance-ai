import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/signup", form);
    alert("Signup successful");
    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Signup</h1>

      <form onSubmit={submit}>
        <input placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})} />
        <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} />
        <input placeholder="Department" onChange={(e) => setForm({...form, department: e.target.value})} />
        <button>Signup</button>
      </form>

      <Link to="/login">Login</Link>
    </div>
  );
}

export default Signup;