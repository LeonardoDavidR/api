const {Router} = require("express")
const router = Router();
const userCTRL = require ("../controller/user.controller")


router.post("/register", userCTRL.postRegister);

router.post("/login", userCTRL.postLogin)

module.exports = router;