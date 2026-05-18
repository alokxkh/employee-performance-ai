const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  addEmployee,
  getEmployees,
  searchEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.post("/", authMiddleware, addEmployee);
router.get("/", authMiddleware, getEmployees);
router.get("/search", authMiddleware, searchEmployee);
router.put("/:id", authMiddleware, updateEmployee);
router.delete("/:id", authMiddleware, deleteEmployee);

module.exports = router;