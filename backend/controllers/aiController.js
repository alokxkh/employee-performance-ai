const Employee = require("../models/Employee");
const askAI = require("../utils/openrouter");

exports.recommend = async (req, res) => {
  try {
    const employees = await Employee.find();

    const prompt = `
Analyze these employees and provide:
1. Promotion recommendation
2. Employee ranking
3. Training suggestions
4. Feedback

Employees:
${JSON.stringify(employees)}
`;

    const aiResponse = await askAI(prompt);

    res.json({
      recommendation: aiResponse,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};