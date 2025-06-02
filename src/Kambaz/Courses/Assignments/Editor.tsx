import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addAssignment, updateAssignment } from './reducer'; // Redux actions

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    console.log("currentUser", currentUser);
    const isFaculty = currentUser && currentUser.role === 'FACULTY';;

    // State for form inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState(0);
    const [duedate, setDueDate] = useState('');
    const [startdate, setAvailableFrom] = useState('');
    const [availableuntil, setAvailableUntil] = useState('');

    useEffect(() => {
        if (aid !== 'New') {
            const assignment = assignments.find((a: any) => a._id === aid);
            if (assignment) {
                setTitle(assignment.title || '');
                setDescription(assignment.description || '');
                setPoints(assignment.points || 0);
                setDueDate(assignment.duedate || '');
                setAvailableFrom(assignment.startdate || '');
                setAvailableUntil(assignment.availableuntil || '');
            }
        } else {
            setTitle('');
            setDescription('');
            setPoints(0);
            setDueDate('');
            setAvailableFrom('');
            setAvailableUntil('');
        }
    }, [aid, assignments]);

    const handleSave = () => {
        const newAssignment = {
            // aid,
            title,
            description,
            points,
            duedate,
            startdate,
            availableuntil,
            course: cid,
        };

        if (aid === 'New') {
            dispatch(addAssignment(newAssignment));
        } else {
            dispatch(updateAssignment(newAssignment));
        }

        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="row mb-2">
                <div className="col">
                    <label htmlFor="wd-name" className="form-label">
                        Assignment Name
                    </label>
                    <input
                        id="wd-name"
                        value={title}
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={!isFaculty}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="wd-description" className="form-label">
                        Description
                    </label>
                    <textarea
                        cols={50}
                        rows={10}
                        id="wd-description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        disabled={!isFaculty}
                    />
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <label htmlFor="wd-points" className="form-label">
                        Points
                    </label>
                </div>
                <div className="col-md-9">
                    <input
                        id="wd-points"
                        type="number"
                        value={points}
                        className="form-control"
                        onChange={(e) => setPoints(Number(e.target.value))}
                        disabled={!isFaculty}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-3 d-flex justify-content-end">
                    <label className="form-label font-weight-bold">Due</label>
                </div>
                <div className="col-md-9">
                    <input
                        id="wd-due-date"
                        type="datetime-local"
                        value={duedate}
                        className="form-control"
                        onChange={(e) => setDueDate(e.target.value)}
                        disabled={!isFaculty}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-3 d-flex justify-content-end">
                    <label className="form-label font-weight-bold">Available from</label>
                </div>
                <div className="col-md-9">
                    <input
                        id="wd-available-from"
                        type="datetime-local"
                        value={startdate}
                        className="form-control"
                        onChange={(e) => setAvailableFrom(e.target.value)}
                        disabled={!isFaculty}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-3 d-flex justify-content-end">
                    <label className="form-label font-weight-bold">Until</label>
                </div>
                <div className="col-md-9">
                    <input
                        id="wd-available-until"
                        type="datetime-local"
                        value={availableuntil}
                        className="form-control"
                        onChange={(e) => setAvailableUntil(e.target.value)}
                        disabled={!isFaculty}
                    />
                </div>
            </div>

            <hr />
            {isFaculty && (
                <div className="row">
                    <div className="col text-end">
                        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                            <button className="btn btn-secondary me-2">Cancel</button>
                        </Link>
                        <button className="btn btn-danger" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            )}
            {!isFaculty && (
                <div className="row">
                    <div className="col text-end">
                        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                            <button className="btn btn-secondary me-2">Back</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}