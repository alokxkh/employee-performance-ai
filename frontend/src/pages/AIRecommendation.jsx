import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AIRecommendation() {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const getRecommendation = async () => {
    const res = await API.post("/ai/recommend");
    setResult(res.data.recommendation);
  };

  return (
    <div className="container">
      <h1>AI Recommendation</h1>

      <button onClick={() => navigate("/dashboard")}>
        Back
      </button>

      <button onClick={getRecommendation}>
        Generate AI Recommendation
      </button>

      <pre>{result}</pre>
    </div>
  );
}

export default AIRecommendation;