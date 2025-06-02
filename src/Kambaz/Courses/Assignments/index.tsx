import { ListGroup } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import AssignmentControl from './AssignmentControl';
import AssignmentControlButtons from './AssignmentControlButtons';
import { deleteAssignment } from './reducer';

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === 'FACULTY';
    console.log(
        'Assignments list:',
        assignments.map((a: any) => a._id)
    );
    console.log('Current user:', currentUser);
    return (
        <div id="wd-assignments">
            <div id="wd-assignments">
                {isFaculty && <AssignmentControl />}
                <br />
                <ListGroup className="rounded-0" id="wd-modules">
                    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> <strong>ASSIGNMENTS</strong>
                        </div>
                        <ListGroup className="wd-lessons rounded-0">
                            {assignments
                                .filter((assignment: any) => assignment.course === cid)

                                .map((assignment: any) => (
                                    <ListGroup.Item
                                        key={assignment._id}
                                        className="wd-lesson p-3 ps-1"
                                    >
                                        <BsGripVertical className="me-2 fs-3" />
                                        <NavLink
                                            to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                                            id="wd-assignment-link"
                                        >
                                            <strong>{assignment.title} </strong>
                                        </NavLink>
                                        Multiple Modules | <strong>Not available until</strong>
                                        {assignment.startdate} | <strong>Due</strong>{' '}
                                        {assignment.duedate}| 100 pts
                                        {isFaculty && (
                                            <AssignmentControlButtons
                                                assignmentId={assignment._id}
                                                deleteAssignment={(assignmentId) =>
                                                    dispatch(deleteAssignment(assignmentId))
                                                }
                                            />
                                        )}
                                    </ListGroup.Item>
                                ))}
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}