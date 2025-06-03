import CourseNavigation from "./Navigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import PeopleTable from "./People/Table";
import AssignmentEditor from "./Assignments/Editor";
import {Navigate, Route, Routes, useLocation, useParams} from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function Courses() {
    const {cid} = useParams()
    const {pathname} = useLocation()
    const pathnameList = pathname.split("/");
    const currentLocation = pathnameList[pathnameList.length-1] ? " > "+ pathnameList[4]: "";
    const { courses } = useSelector((state: any) => state.courseReducer);
    const course = courses.find((course: any) => course._id === cid)
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {(course && pathname && course.name + currentLocation)}
            </h2> <hr/>
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
            </div>
            <div className="flex-fill">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={<Modules/>} />
                            <Route path="Assignments" element={<Assignments/>} />
                            <Route path="Assignments/:aid" element={<AssignmentEditor/>} />
                            <Route path="People" element={<PeopleTable/>} />
                            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                            <Route path="Grades" element={<h2>Grades</h2>} />
                            <Route path="Zoom" element={<h2>Zoom</h2>} />
                            <Route path="Piazza" element={<h2>Piazza</h2>} />
                    </Routes>
            </div>
        </div>
        </div>
    );
}
    