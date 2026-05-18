const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { recommend } = require("../controllers/aiController");

router.post("/recommend", authMiddleware, recommend);

module.exports = router;