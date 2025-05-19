import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
    const location = useLocation();

    const getLinkClass = (path: string) => {
        return `list-group-item border border-0 ${
            location.pathname.startsWith(path) ? "active" : "text-danger"
        }`;
    }
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <Link to="/Kambaz/Account/Signin" id="wd-sign-in-link"
                className={getLinkClass("/Kambaz/Account/Signin")}>Sign in</Link> 
            <Link to="/Kambaz/Account/Signup" id="wd-sign-up-link"
                className={getLinkClass("/Kambaz/Account/Signup")}>Sign up</Link>
            <Link to="/Kambaz/Account/Profile" id="wd-profile-link"
                className={getLinkClass("/Kambaz/Account/Profile")}>Profile</Link>
        </div>
    );
}