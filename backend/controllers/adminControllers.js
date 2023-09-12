const cloudinary = require("cloudinary");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");

const Admin = require("../models/adminModel");
const Student = require("../models/studentModel");
const Teacher = require("../models/teacherModel");

/* =============================================================
        Register Admin (/api/v1/register/admin) (req : POST)
   ============================================================= */
exports.registerAdmin = catchAsyncError(async (req, res, next) => {
  const { userName, password, name } = req.body;
  const nameUser = await Admin.findOne({ userName });
  if (nameUser) {
    return next(new ErrorHandler("This Admin already exist.", 400));
  }
  await Admin.create({ userName, password, name });
  res.status(200).json({
    success: true,
    message: "Admin Register Successfully",
  });
});
/* ==================================================================
        Register Student (/api/v1/register/student) (req : POST)
   ================================================================== */
exports.registerStudent = catchAsyncError(async (req, res, next) => {
  const { id, password, name, email } = req.body;
  const studentId = await Student.findOne({ id });
  if (studentId) {
    return next(new ErrorHandler("This Student already exist.", 400));
  }
  await Student.create({ id, password, name, email });
  res.status(200).json({
    success: true,
    message: "Student Register Successfully",
  });
});

/* ==============================================================
      Register Teacher (/api/v1/register/teacher) (req : POST)
   ============================================================== */
exports.registerTeacher = catchAsyncError(async (req, res, next) => {
  const { id, password, name, email } = req.body;
  const teacherId = await Teacher.findOne({ id });
  if (teacherId) {
    return next(new ErrorHandler("This Teacher already exist.", 400));
  }
  await Teacher.create({ id, password, name, email });
  res.status(200).json({
    success: true,
    message: "Teacher Register Successfully",
  });
});
