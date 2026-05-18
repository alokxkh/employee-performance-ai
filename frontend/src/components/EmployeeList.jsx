import API from "../services/api";

function EmployeeList({ employees, fetchEmployees }) {
  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`);
    fetchEmployees();
  };

  const updateEmployee = async (id) => {
    await API.put(`/employees/${id}`, {
      performanceScore: 95,
    });

    fetchEmployees();
  };

  return (
    <div>
      <h2>Employees</h2>

      {employees.map((emp) => (
        <div className="card" key={emp._id}>
          <p>Name: {emp.name}</p>
          <p>Email: {emp.email}</p>
          <p>Department: {emp.department}</p>
          <p>Skills: {emp.skills.join(", ")}</p>
          <p>Performance: {emp.performanceScore}</p>
          <p>Experience: {emp.experience} years</p>

          <div className="row">
            <button onClick={() => updateEmployee(emp._id)}>
              Update Score
            </button>

            <button onClick={() => deleteEmployee(emp._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;