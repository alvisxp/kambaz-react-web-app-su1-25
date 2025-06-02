import { useState } from 'react';
import { Button, Card, Col, FormControl, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEnrollment, deleteEnrollment } from './reducer';
import { addCourse, deleteCourse, updateCourse } from '../Courses/reducer';

export default function Dashboard() {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const isFaculty = currentUser && currentUser.role === 'FACULTY';

    // Local state for the course being edited/added
    const [course, setCourse] = useState<any>({
        _id: undefined,
        name: "",
        number: "",
        startDate: "",
        endDate: "",
        image: "/images/react.svg",
        description: ""
    });

    const [showEnrolled, setShowEnrolled] = useState(true);

    const filteredCourses = showEnrolled
        ? courses.filter((course: any) =>
              enrollments.some(
                  (enrollment: any) =>
                      enrollment.user === currentUser._id && enrollment.course === course._id
              )
          )
        : courses;

    const isEnrolled = (courseId: any) =>
        enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser._id && enrollment.course === courseId
        );

    // Add or update course
    const handleAddOrUpdateCourse = () => {
        if (course._id) {
            dispatch(updateCourse(course));
        } else {
            dispatch(addCourse({
                ...course,
                number: course.number || "NEW",
                startDate: course.startDate || new Date().toISOString().slice(0,10),
                endDate: course.endDate || new Date().toISOString().slice(0,10),
                image: course.image || "/images/react.svg",
            }));
        }
        setCourse({
            _id: undefined,
            name: "",
            number: "",
            startDate: "",
            endDate: "",
            image: "/images/react.svg",
            description: ""
        });
    };

    // Edit course (populate form)
    const handleEditCourse = (courseToEdit: any) => {
        setCourse(courseToEdit);
    };

    // Delete course
    const handleDeleteCourse = (courseId: string) => {
        dispatch(deleteCourse(courseId));
        if (course._id === courseId) setCourse({
            _id: undefined,
            name: "",
            number: "",
            startDate: "",
            endDate: "",
            image: "/images/react.svg",
            description: ""
        });
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {isFaculty && (
                <div>
                    <h5>
                        {course._id ? 'Edit Course' : 'New Course'}
                        <button
                            className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={handleAddOrUpdateCourse}
                        >
                            {course._id ? 'Update' : 'Add'}
                        </button>
                        {course._id && (
                            <button
                                className="btn btn-secondary float-end me-2"
                                onClick={() => setCourse({
                                    _id: undefined,
                                    name: "",
                                    number: "",
                                    startDate: "",
                                    endDate: "",
                                    image: "/images/react.svg",
                                    description: ""
                                })}
                            >
                                Cancel
                            </button>
                        )}
                        <br />
                    </h5>
                    <div id="wd-dshboard-add-course-form">
                        <FormControl
                            value={course.name}
                            className="mb-2"
                            placeholder="Course Name"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })}
                        />
                        <FormControl
                            value={course.number}
                            className="mb-2"
                            placeholder="Course Number"
                            onChange={(e) => setCourse({ ...course, number: e.target.value })}
                        />
                        <FormControl
                            value={course.startDate}
                            className="mb-2"
                            placeholder="Start Date"
                            type="date"
                            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                        />
                        <FormControl
                            value={course.endDate}
                            className="mb-2"
                            placeholder="End Date"
                            type="date"
                            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                        />
                        <FormControl
                            value={course.image}
                            className="mb-2"
                            placeholder="Image URL"
                            onChange={(e) => setCourse({ ...course, image: e.target.value })}
                        />
                        <FormControl
                            as="textarea"
                            value={course.description}
                            rows={3}
                            placeholder="Course Description"
                            onChange={(e) => setCourse({ ...course, description: e.target.value })}
                        />
                        <hr />
                    </div>
                </div>
            )}
            <div id="wd-enrollments-button">
                <button
                    className="btn btn-primary float-end"
                    onClick={() => setShowEnrolled(!showEnrolled)}
                >
                    {showEnrolled ? 'Show All Courses' : 'Show Enrolled Courses'}
                </button>
            </div>
            <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {filteredCourses.map((course: any) => (
                        <Col
                            key={course._id}
                            className="wd-dashboard-course"
                            style={{ width: '300px' }}
                        >
                            <Card>
                                <Link
                                    to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <Card.Img
                                        src={course.image || "/images/react.svg"}
                                        variant="top"
                                        width="100%"
                                        height={160}
                                    />
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name}
                                        </Card.Title>
                                        <Card.Text
                                            className="wd-dashboard-course-description overflow-hidden"
                                            style={{ height: '100px' }}
                                        >
                                            {course.description}
                                        </Card.Text>
                                        <Button variant="primary"> Go </Button>
                                        {isFaculty && (
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    handleDeleteCourse(course._id);
                                                }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                        )}
                                        {isFaculty && (
                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    handleEditCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end"
                                            >
                                                Edit
                                            </button>
                                        )}
                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                const enrollment = {
                                                    user: currentUser._id,
                                                    course: course._id,
                                                };
                                                if (isEnrolled(course._id)) {
                                                    dispatch(deleteEnrollment(enrollment));
                                                } else {
                                                    dispatch(addEnrollment(enrollment));
                                                }
                                            }}
                                            className={
                                                isEnrolled(course._id)
                                                    ? 'btn btn-danger'
                                                    : 'btn btn-success'
                                            }
                                        >
                                            {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                                        </button>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}