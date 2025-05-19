import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Form, Row} from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2} htmlFor="wd-name">
                        Assignment Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control id="wd-name" value="A1 - ENV + HTML" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            id="wd-description"
                            rows={3}
                            defaultValue="The assignment is available online Subit a link to the landing page of your Web Application runnning on Netlify.The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kambaz appplication Links to all relevant source code repositories. The kaambaz application should include a link to navigate back to the landing page."
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
                        <Form.Select id="wd-group" defaultValue="Assignments">
                            <option value="Assignments">Assignments</option>
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
                        <Form.Control type="date" id="wd-available-until" value="2024-05-20" />
                    </Col>
                </Form.Group>
                <hr />
                <Form.Group as={Row} className="mb-3">
                    <Col className="d-flex justify-content-end">
                        <Button variant="secondary" className="me-2">
                            Cancel
                        </Button>
                        <Button variant="danger">Save</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}