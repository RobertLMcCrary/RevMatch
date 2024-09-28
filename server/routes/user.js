const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

// Protected route
router.get('/profile', auth, async (req, res) => {
    try {
        // req.user is set by the auth middleware
        res.json(req.user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
