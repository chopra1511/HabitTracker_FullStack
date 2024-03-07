
const express = require('express')

const router = express.Router();
const habitController = require("../controllers/habits");



router.get("/dashboard", habitController.dashboard);

router.get("/dashboard/stats", habitController.habitStats);

router.post("/dashboard/delete", habitController.deleteDashboardHabit);

router.post("/dashboard/habitStats/delete", habitController.deleteHabitStats);

router.post("/dashboard/habitStats/status", habitController.toggleStatus);

router.post("/dashboard/habit", habitController.postHabits);





exports.routes = router;
