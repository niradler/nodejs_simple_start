const router = require('express').Router();
const TestController = require('../controllers/TestController');

router.get('/test', TestController);

module.exports = router;