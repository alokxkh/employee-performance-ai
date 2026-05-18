import { useState } from "react";
import API from "../services/api";

function EmployeeForm({ fetchEmployees }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await API.post("/employees", {
      ...form,
      skills: form.skills.split(","),
    });

    alert("Employee added");
    fetchEmployees();
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Employee</h2>

      <input
        placeholder="Employee Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Department"
        onChange={(e) => setForm({ ...form, department: e.target.value })}
      />

      <input
        placeholder="Skills (comma separated)"
        onChange={(e) => setForm({ ...form, skills: e.target.value })}
      />

      <input
        placeholder="Performance Score"
        onChange={(e) =>
          setForm({ ...form, performanceScore: e.target.value })
        }
      />

      <input
        placeholder="Experience"
        onChange={(e) => setForm({ ...form, experience: e.target.value })}
      />

      <button>Add Employee</button>
    </form>
  );
}

export default EmployeeForm;