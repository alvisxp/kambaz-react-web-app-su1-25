import {Link} from "react-router-dom";
import {Button, Card, Col, Row} from "react-bootstrap";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{width: '300px'}}>
                        <Card>
                            <Link 
                                to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img
                                        variant = "top"
                                        src = "images/react.svg"
                                        width="100%"
                                        height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS1234 React JS
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack Software Developer 
                                        </Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{width: '300px'}}>
                        <Card>
                            <Link 
                                to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img
                                        variant = "top"
                                        src = "images/react.svg"
                                        width="100%"
                                        height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS2345 Node JS
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack Software Developer 
                                        </Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{width: '300px'}}>
                        <Card>
                            <Link 
                                to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img
                                        variant = "top"
                                        src = "images/react.svg"
                                        width="100%"
                                        height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS3456 Java
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack Software Developer 
                                        </Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{width: '300px'}}>
                        <Card>
                            <Link 
                                to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img
                                        variant = "top"
                                        src = "images/react.svg"
                                        width="100%"
                                        height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS4567 Python
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack Software Developer 
                                        </Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{width: '300px'}}>
                        <Card>
                            <Link 
                                to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img
                                        variant = "top"
                                        src = "images/react.svg"
                                        width="100%"
                                        height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS5678 C++
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack Software Developer 
                                        </Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{width: '300px'}}>
                        <Card>
                            <Link 
                                to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img
                                        variant = "top"
                                        src = "images/react.svg"
                                        width="100%"
                                        height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS6789 C#
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack Software Developer 
                                        </Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{width: '300px'}}>
                        <Card>
                            <Link 
                                to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img
                                        variant = "top"
                                        src = "images/react.svg"
                                        width="100%"
                                        height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS7890 AWS
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack Software Developer 
                                        </Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                        </Card>
                    </Col>

                    <Col className="wd-dashboard-course" style={{width: '300px'}}>
                        <Card>
                            <Link 
                                to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                                    <Card.Img
                                        variant = "top"
                                        src = "images/react.svg"
                                        width="100%"
                                        height={160} />
                                    <Card.Body>
                                        <Card.Title className="wd-dashboard-course-title">
                                            CS8901 API Development
                                        </Card.Title>
                                        <Card.Text className="wd-dashboard-course-description">
                                            Full Stack Software Developer 
                                        </Card.Text>
                                        <Button variant="primary">Go</Button>
                                    </Card.Body>
                                </Link>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>

    );
}