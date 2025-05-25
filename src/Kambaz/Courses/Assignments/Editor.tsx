import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import * as db from '../../Database';

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;

    const assignment = assignments.find((assignment) => assignment._id === aid);
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} htmlFor="wd-name">
                        Assignment Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control id="wd-name" value={assignment?.title} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            id="wd-description"
                            rows={3}
                            value={assignment?.description}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} htmlFor="wd-points">
                        Points
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control id="wd-points" value={100} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} htmlFor="wd-group">
                        Assignment Group
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} htmlFor="wd-display-grade-as">
                        Display Grade as
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
                            <option value="Percentage">Percentage</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} htmlFor="wd-submission-type">
                        Submission Type
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select id="wd-submission-type" defaultValue="Online">
                            <option value="Online">Online</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} htmlFor="wd-select-entry">
                        Online Entry Options
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            type="checkbox"
                            id="wd-text-entry"
                            name="entry-option"
                            value="Text Entry"
                            label="Text Entry"
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-website-url"
                            name="entry-option"
                            value="Website URL"
                            label="Website URL"
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-media-recording"
                            name="entry-option"
                            value="Media Recording"
                            label="Media Recording"
                        />
                        <Form.Check
                            type="checkbox"
                            id="student-annotation"
                            name="entry-option"
                            value="Student Annotation"
                            label="Student Annotation"
                        />
                        <Form.Check
                            type="checkbox"
                            id="wd-file-upload"
                            name="entry-option"
                            value="File Uploads"
                            label="File Uploads"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} htmlFor="wd-assign-to">
                        Assign to
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control id="wd-assign-to" value="Everyone" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} htmlFor="wd-due-date">
                        Due
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="date" id="wd-due-date" value="2025-05-13" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={6}>
                        <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                        <Form.Control type="date" id="wd-available-from" value="2025-05-06" />
                    </Col>
                    <Col sm={6}>
                        <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                        <Form.Control type="date" id="wd-available-until" value="2025-05-30" />
                    </Col>
                </Form.Group>
                <hr />
                <Form.Group as={Row} className="mb-3">
                    <Col className="d-flex justify-content-end">
                        <Link
                            to={`/Kambaz/Courses/${cid}/Assignments`}
                            className="btn btn-secondary"
                        >
                            Cancel
                        </Link>
                        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
                            Save
                        </Link>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}