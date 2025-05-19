import {Link} from "react-router-dom";
import {BsGripVertical} from "react-icons/bs";
import { ListGroup } from "react-bootstrap";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControl from "./AssignmentControl";
import AssignmentControlButtons from "./AssignmentControlButtons";
export default function Assignments() {
    return (
        <div id="wd-assignments">
             <AssignmentControl /> <br />{' '}
                <ListGroup className="rounded-0" id="wd-modules">
                    {' '}
                    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                        {' '}
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            {' '}
                            <BsGripVertical className="me-2 fs-3" /> <strong>ASSIGNMENTS</strong>{' '}
                            <AssignmentControlButtons />{' '}
                        </div>{' '}
                        <ListGroup className="wd-lessons rounded-0">
                            {' '}
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                {' '}
                                <BsGripVertical className="me-2 fs-3" />
                                <Link
                                    to="/Kambaz/Courses/1234/Assignments/123"
                                    id="wd-assignment-link"
                                    className="text-dark text-decoration-none fw-bold"
                                >
                                    <strong>A1</strong>
                                </Link> {' '}
                                    <span className="text-danger">Multiple Modules</span>
                                    {" | "}
                                    <strong>Not available until</strong> May 6 at 12:00am
                                    {" | "}
                                    <strong>Due</strong> May 13 at 11:59pm
                                    {" | "}
                                    100 pts
                                
                                <LessonControlButtons />{' '}
                            </ListGroup.Item>{' '}
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                {' '}
                                <BsGripVertical className="me-2 fs-3" />
                                <Link
                                    to="/Kambaz/Courses/1234/Assignments/123"
                                    id="wd-assignment-link"
                                    className="text-dark text-decoration-none fw-bold"
                                >
                                    <strong>A2</strong>
                                </Link>{' '}
                                    <span className="text-danger">Multiple Modules</span>
                                    {" | "}
                                    <strong>Not available until</strong> May 13 at 12:00am
                                    {" | "}
                                    <strong>Due</strong> May 20 at 11:59pm
                                    {" | "}
                                    100 pts
                                <LessonControlButtons />{' '}
                            </ListGroup.Item>{' '}
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                {' '}
                                <BsGripVertical className="me-2 fs-3" />
                                <Link
                                    to="/Kambaz/Courses/1234/Assignments/123"
                                    id="wd-assignment-link"
                                    className="text-dark text-decoration-none fw-bold"
                                >
                                    <strong>A3</strong>
                                </Link>{' '}
                                    <span className="text-danger">Multiple Modules</span>
                                    {" | "}
                                    <strong>Not available until</strong> May 20 at 12:00am
                                    {" | "}
                                    <strong>Due</strong> May 27 at 11:59pm
                                    {" | "}
                                    100 pts
                                
                                <LessonControlButtons />{' '}
                            </ListGroup.Item>{' '}
                        </ListGroup>{' '}
                    </ListGroup.Item>{' '}
                </ListGroup>{' '}
            </div>
    );
}