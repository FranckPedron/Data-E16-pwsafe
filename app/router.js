const express = require('express');
const router = express.Router();
const controller = require("./controller");

/**
 * Get password from key
 */
router.get('/password/:key',controller.getPassword);

/**
 * Set password from key
 */
router.put('/password/:key',controller.setPassword);


/**
 * Delete password from key
 */
 router.delete('/password/:key',controller.deletePassword);

module.exports = router;
