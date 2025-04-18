const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

router.post("/contact", async (req, res) => {
    let result = await contactController.contact(req)
    return res.status(200).json({ "message": result });
});

module.exports = router;