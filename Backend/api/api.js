const express = require('express');
const router = express.Router();

router.post('/resource', (req, res) => {
  res.json({ success: true });
});

module.exports = router;