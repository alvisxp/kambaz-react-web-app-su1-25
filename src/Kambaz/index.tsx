import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css"
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as client from "./Courses/client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "./Courses/courseReducer";
import { setEnrollments } from "./Courses/enrollmentReducer";

export default function Kambaz() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const fetchCourses = async () => {
    try {
      const fetchedCourses = await client.fetchAllCourses();
      dispatch(setCourses(fetchedCourses));
    } catch (error) {
      console.error(error);
    }
  };
  const fetchEnrollments = async () => {
    try {
      const fetchedEnrollments = await client.fetchAllEnrollments();
      dispatch(setEnrollments(fetchedEnrollments));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchEnrollments();
  }, [currentUser]);

  useEffect(() => {
    fetchCourses();
  }, [currentUser, enrollments]);

  return (
    <Session>
      <div id="wd-kambaz">
          <KambazNavigation/>
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="Dashboard" element={
              <ProtectedRoute><Dashboard/></ProtectedRoute>
              } />
              <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses/></ProtectedRoute>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
    </div>
    </Session>
);}