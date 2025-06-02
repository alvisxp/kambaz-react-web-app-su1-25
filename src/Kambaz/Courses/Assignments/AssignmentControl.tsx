import { Button, Col, Form, Row } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
export default function AssignmentControl() {
    const navigate = useNavigate();
    const handleAddAssignmentClick = () => {
        navigate(`/Kambaz/Courses/${cid}/Assignments/New`);
    };
    const { cid } = useParams();
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Form>
                <Row>
                    <Col xs="auto">
                        <CiSearch className=" mr-sm-2" />
                    </Col>
                    <Col xs="auto">
                        <Form.Control type="text" placeholder="Search.." className=" mr-sm-2" />{' '}
                    </Col>
                    <Col>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="me-1 float-end"
                            id="wd-add-module-btn"
                        >
                            <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
                            Group
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button
                            variant="danger"
                            size="lg"
                            className="me-1 float-end"
                            id="wd-add-module-btn"
                            onClick={handleAddAssignmentClick}
                        >
                            <FaPlus className="position-relative me-2" style={{ bottom: '1px' }} />
                            Assignment
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}