import React, { useState } from "react";
import { useSelector } from "react-redux";
import NotFound from "../NotFound";
import StudentDashboard from "./Dashboard/StudentDashboard";
import TeacherDashboard from "./Dashboard/TeacherDashboard";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  if (user.role === "Student") {
    return <StudentDashboard />;
  } else if (user.role === "Teacher") {
    return <TeacherDashboard />;
  } else {
    return <NotFound />;
  }
};

export default Home;
