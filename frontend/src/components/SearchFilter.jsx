import { useState } from "react";

function SearchFilter({ searchEmployees }) {
  const [department, setDepartment] = useState("");

  return (
    <div>
      <input
        placeholder="Search by Department"
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button onClick={() => searchEmployees(department)}>
        Search
      </button>
    </div>
  );
}

export default SearchFilter;