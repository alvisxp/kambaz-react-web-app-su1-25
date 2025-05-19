import { AiOutlineDashboard} from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaCalendar} from "react-icons/fa6";
import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
export default function KambazNavigation() {
    const location = useLocation();

    const getLinkClasses = (path: string) => 
        `text-center border-0 ${
            location.pathname.startsWith(path) ? "bg-white text-danger" : "bg-black text-white"
        }`;
    return (
        <ListGroup 
            id="wd-kambaz-navigation" style={{width: 120}}
            className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

            <ListGroup.Item 
                id="wd-neu-link" target="_blank" action href="https://www.northeastern.edu/"
                className="bg-black border-0 text-black text-center">
                <img src="images/NEU.png" width="75px" /> 
                Northeastern
            </ListGroup.Item>

            <ListGroup.Item 
                id="wd-account-link" to="/Kambaz/Account" as={Link}
                className="border-0 bg-black text-white text-center">
                <FaRegCircleUser className="fs-1" /><br />
                Account 
            </ListGroup.Item>

            <ListGroup.Item 
                id="wd-dashboard-link" to="/Kambaz/Dashboard" as={Link}
                className={getLinkClasses("/Kambaz/Dashboard")}>
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </ListGroup.Item>

            <ListGroup.Item 
                id="wd-course-link" to="/Kambaz/Dashboard" as={Link}
                className={getLinkClasses("/Kambaz/Dashboard")}>
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </ListGroup.Item>

            <ListGroup.Item 
                id="wd-calendar-link" to="/Kambaz/Calendar" as={Link} 
                className={getLinkClasses("/Kambaz/Calendar")}>
                    <FaCalendar className="fs-1 text-danger" />
                    <br />
                    Calendar
            </ListGroup.Item>

            <ListGroup.Item 
                id="wd-inbox-link" to="/Kambaz/Inbox" as={Link}
                className={getLinkClasses("/Kambaz/Inbox")}>
                    <FaInbox className="fs-1 text-danger" />
                    <br />
                    Inbox
            </ListGroup.Item>

            <ListGroup.Item 
                id="wd-labs-link" to="/Labs" as={Link}
                className={getLinkClasses("/Labs")}>
                <LiaCogSolid className="fs-1 text-danger" /><br />
                Labs
            </ListGroup.Item>
        </ListGroup>        
    );
}