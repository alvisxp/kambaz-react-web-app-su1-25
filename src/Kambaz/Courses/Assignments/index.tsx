import {Link, useParams} from "react-router-dom";
import {BsGripVertical} from "react-icons/bs";
import { ListGroup } from "react-bootstrap";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControl from "./AssignmentControl";
import AssignmentControlButtons from "./AssignmentControlButtons";
import * as db from "../../Database";
export default function Assignments() {
    const {cid} = useParams();
    const assignments = db.assignments.filter((assignment)=> assignment.course === cid);
    return (
        <div id="wd-assignments">
            <div id="wd-assignments">
                <AssignmentControl /> <br />
                <ListGroup className="rounded-0" id="wd-modules">
                    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> <strong>ASSIGNMENTS</strong>
                            <AssignmentControlButtons />
                        </div>
                        <ListGroup className="wd-lessons rounded-0">
                            {assignments.map((assignment) => (
                                <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <Link
                                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                        id="wd-assignment-link"
                                    >
                                        <strong>{assignment.title}</strong>
                                    </Link>{' '}
                                    <span className="text-danger">Multiple Modules</span>{' '}
                                    <strong>| Not available until</strong>{' '}
                                    {assignment.startdate} | <strong>Due</strong>{' '}
                                    {assignment.duedate}
                                    | 100 pts
                                    <LessonControlButtons />
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}