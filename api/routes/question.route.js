const router = require('express').Router();
const checkAuthStudent = require('../middlewares/check_auth_student');

router.get('/:id', checkAuthStudent,);
module.exports = router;

