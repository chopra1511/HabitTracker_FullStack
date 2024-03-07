const express = require('express');

const router = express.Router();
const habitController = require('../controllers/habits')

const users = [];


router.get("/", habitController.startPage);






exports.routes = router;
exports.users = users;
