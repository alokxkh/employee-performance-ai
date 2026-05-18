const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));

app.use(errorMiddleware);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});