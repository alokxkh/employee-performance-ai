import { useEffect, useState } from "react";
import API from "../services/api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import SearchFilter from "../components/SearchFilter";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  const searchEmployees = async (department) => {
    const res = await API.get(
      `/employees/search?department=${department}`
    );
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <h1>Employee Dashboard</h1>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

      <button onClick={() => navigate("/ai")}>
        AI Recommendations
      </button>

      <SearchFilter searchEmployees={searchEmployees} />
      <EmployeeForm fetchEmployees={fetchEmployees} />
      <EmployeeList
        employees={employees}
        fetchEmployees={fetchEmployees}
      />
    </div>
  );
}

export default Dashboard;