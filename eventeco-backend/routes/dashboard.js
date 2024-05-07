const express = require("express")
const router = express.Router()

// Routes for Login, Signup,sendotp ,changepassword  and Authentication and resetpassword;


// Import the required controllers and middleware functions
const { registerEvent, alleventData,registerAuthorities,addperson,checkticket,addhomeData,addsubmail,authLogin,regallData ,authallData} = require("../controller/dashboard")
const isLoggedin  = require('../middleware/AuthMiddleware')
// const { resetPasswordToken,  resetPassword,} = require("../controllers/ResetPassword")
// const { auth } = require("../middlewares/auth")


// ********************************************************************************************************
//                                      Authentication routes                                             *
// ********************************************************************************************************
router.post("/registerevent", registerEvent);
router.post("/addperson", addperson);
router.post("/registerauth", registerAuthorities);
router.get("/alleventdata", alleventData);
router.get("/resalldata", regallData);
router.get("/authalldata", authallData);
router.post("/checkticket", checkticket);
router.post("/addhomedata", addhomeData);
router.post("/addsubmail", addsubmail);
router.post("/authlogin", authLogin);

                    // Route for Register User
// router.post("/signup", signUp)                    // Route for user signup
// router.post("/sendotp", sendOTP)                  // Route for sending OTP to the user's email
// router.post("/changepassword", auth, changePassword)     // Route for Changing the password



// ********************************************************************************************************
//                                      Reset Password                                                    *
// ********************************************************************************************************
// router.post("/reset-password-token", resetPasswordToken)                 // Route for generating a reset password token
// router.post("/reset-password", resetPassword)                          // Route for resetting user's password after verification


module.exports = router