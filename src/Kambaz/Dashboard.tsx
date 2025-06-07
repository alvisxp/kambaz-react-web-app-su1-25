import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse } from "./Courses/courseReducer";
import { useState } from "react";
import { enrollInCourse, unenrollFromCourse } from "./Courses/enrollmentReducer";
import * as userClient from "./Account/client";
import { setCourses } from "./Courses/courseReducer";
import * as courseClient from "./Courses/client";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const { courses } = useSelector((state: any) => state.courseReducer);
  const [course, setCourse] = useState<any>({});
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleEnrollment = async (courseId: string) => {
    const isEnrolled = enrollments.some(
      (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === courseId
    );

    if (isEnrolled) {
      await userClient.unenrollCourse(courseId);
      dispatch(unenrollFromCourse({courseId: courseId, user_id: currentUser._id}));
    } else {
      const newEnrollmentId = await userClient.enrollCourse(courseId);
      dispatch(enrollInCourse({_id: newEnrollmentId, courseId: courseId, user_id: currentUser._id}));
    }
  };

  const addNewCourseCall = async () => {
    const newCourse = await userClient.createCourse(course);
    dispatch(enrollInCourse({courseId: newCourse._id, user_id: currentUser._id}));
    dispatch(addNewCourse(newCourse))
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
  }

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    dispatch(setCourses(courses.map((c: any) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));
  }


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser != null && currentUser.role === "FACULTY" && <div><h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick= {addNewCourseCall} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <FormControl value={course.name} className="mb-2" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <FormControl as="textarea" value={course.description} rows={3}
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } /><hr /></div>}
      <Button className="float-end mb-2" variant="dark" onClick={() => setShowAllCourses(!showAllCourses)}>
        {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
      </Button>
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Enrolled Courses"} ({courses.filter((course: any) => 
          showAllCourses || enrollments.some((enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id)
        ).length})
      </h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
        .filter((course: any) =>
          showAllCourses || enrollments.some(
          (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === course._id
          ))
        .map((course: any) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img src="/images/react.svg" variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description} </Card.Text>
                      <Button variant="primary"> Go </Button>
                      <div className="float-end">
                      {currentUser != null && currentUser.role === "FACULTY" && <button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2" >
                        Edit
                      </button>}

                      <button onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }} className="btn btn-danger"
                              id="wd-delete-course-click">
                              Delete
                      </button>
                      </div>
                    </Card.Body>
                  </Link>
                  <div className="text-center mb-2">
                    {enrollments.some((enrollment:any) => enrollment.user === currentUser._id && enrollment.course === course._id) ? (
                      <button className="btn btn-danger" onClick={() => handleEnrollment(course._id)}>Unenroll</button>
                    ) : (
                      <button className="btn btn-success" onClick={() => handleEnrollment(course._id)}>Enroll</button>
                    )} </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
);}