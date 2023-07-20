const express = require("express");
const router = express.Router();
const TicketController = require("../Controllers/TicketController");

router.post("/addTicket", TicketController.AddTicket);
router.delete("/DeleteTicket", TicketController.DeleteTicket);
router.post("/upTicket", TicketController.Up);
router.post("/downTicket", TicketController.Down);

module.exports = router;
