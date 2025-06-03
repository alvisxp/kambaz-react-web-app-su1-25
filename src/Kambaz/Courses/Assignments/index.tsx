import { Button, Col, Container, Form, InputGroup, ListGroup, Modal, Row } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentLeftControl from "./AssignmentLeftControl";
import { Link, useNavigate, useParams } from "react-router";
import AssignmentItemLeftControl from "./AssignmentItemLeftControl";
// import "./styles.css"
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment } from "./reducer";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
export default function Assignments() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {assignments} = useSelector((state: any) => state.assignmentReducer);

    const { cid }: any = useParams();
    const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid)
    const formatDateForInput = (isoString: any) => {
      if (!isoString) return "";
      const date = new Date(isoString);
      return date.toISOString().split("T")[0];
    };
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [deleteModal, setDeleteModal] = useState(false)
    const handleDelete = () => {
      dispatch(deleteAssignment(selected_assignment_id));
      setDeleteModal(false);
    }
    const [selected_assignment_id, set_selected_assignment_id] = useState("");
    var newAssignmentId = uuidv4();
    
    const newAssignment = () => {
      dispatch(addAssignment({ assignment_id: newAssignmentId, course_id: cid }));
      navigate(`/Kambaz/Courses/${cid}/Assignments/${newAssignmentId}`)
    }
    
    return (
      <div id="wd-assignments">
        <Container className="text-nowrap">
          <Row>
            <Col xs={6}>
            <InputGroup size="lg">
              <InputGroup.Text  style={{ backgroundColor: 'white', borderRight: "none" }} className="pe-0">
                <HiOutlineSearch />
              </InputGroup.Text>
              <Form.Control placeholder="Search for Assignments"
                    id="wd-search-assignment" size="lg" style={{ borderLeft: "none" }}/>
              </InputGroup>
            </Col>
            {currentUser != null && currentUser.role === "FACULTY" && <Col>
              <Button id="wd-add-assignment" variant="danger" size="lg" className="float-end me-2" onClick={newAssignment}><FiPlus className="position-relative" style={{ bottom: "2px" }} /> Assignment</Button>
              <Button id="wd-add-assignment-group" className="btn btn-secondary me-2 float-end" size="lg"><FiPlus className="position-relative" style={{ bottom: "2px" }} /> Group</Button>
            </Col>}
          </Row>
        </Container> <br/> <br/>
        <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
        <div id="wd-assignments-title" className="wd-title p-3 ps-2 mb-0 bg-secondary">
        <AssignmentLeftControl/> ASSIGNMENTS <AssignmentControlButtons/> <span className="float-end me-3 rounded-pill border border-dark ps-2 pe-2">40% of Total</span></div>
        </ListGroup.Item>
        {courseAssignments.map((courseAssignment: any ) => (
          <ListGroup.Item className="wd-assignment-list-item pb-0 wd-assignment-item">
          <Row>
            <Col className="mt-4" xs="auto">
              <AssignmentItemLeftControl/>
            </Col>
            <Col>
              <Link to={`${courseAssignment._id}`}
                className="wd-assignment-link text-decoration-none text-black" style={{fontWeight: "bold"}}>
                {courseAssignment.title}
              </Link>
              <br/>
              <p><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {formatDateForInput(courseAssignment.available_date)} | <b>Due</b> {formatDateForInput(courseAssignment.due_date)} | {courseAssignment.points} pts</p>
            </Col>
            <Col className="pt-4" style={{}}>
            <span className="float-end">
            <a style={{cursor:"pointer"}} onClick={() => {set_selected_assignment_id(courseAssignment._id); setDeleteModal(true)}}>
            <MdDelete className="text-danger me-2" size={30} /></a>

              <LessonControlButtons/>
            </span>
            </Col>
          </Row>
          </ListGroup.Item>
        ))}
          
          {deleteModal && (
            <Modal
            show={deleteModal}
            backdrop="static"
            onHide={()=> {setDeleteModal(false);}}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
              <Modal.Title>Delete Module?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container align-items-center">
                <h5>Are you sure you want to delete the Assignment?</h5>
                <h5 style={{color:"red"}}>{selected_assignment_id}</h5>
                <hr/>
                <div className="d-flex justify-content-around m-2">
                  <button className="btn btn-secondary m-2 w-100" onClick={() => setDeleteModal(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-outline-danger m-2 w-100" onClick={handleDelete}>
                    Delete 
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          )}
        </ListGroup>
      </div>
  );}
  