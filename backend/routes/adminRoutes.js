const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  registerAdmin,
  registerStudent,
  registerTeacher,
} = require("../controllers/adminControllers");

//Routes
router.route("/register/admin").post(registerAdmin);
router
  .route("/register/student")
  .post(isAuthenticatedUser, authorizeRoles("Admin"), registerStudent);

router
  .route("/register/teacher")
  .post(isAuthenticatedUser, authorizeRoles("Admin"), registerTeacher);

module.exports = router;
