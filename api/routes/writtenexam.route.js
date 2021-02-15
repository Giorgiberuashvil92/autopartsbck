const router = require('express').Router();
const checkAuthStudent = require('../middlewares/check_auth_student');

router.get('/', checkAuthStudent,)

router.post('/', checkAuthStudent,);

module.exports = router;