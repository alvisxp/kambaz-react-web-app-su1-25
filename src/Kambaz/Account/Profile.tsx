import {useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import {Form, Button} from "react-bootstrap";
export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchProfile = () => {
        if (!currentUser) return navigate("/Kambaz/Account/Signin");
        setProfile(currentUser);
    };
    const signout = () => {
        dispatch(setCurrentUser(null));
        navigate("/Kambaz/Account/Signin");
    };
    useEffect(() => { fetchProfile(); }, []);

    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (
                <div>
                    <Form.Control id="wd-username" defaultValue="alice" placeholder="username" className="mb-2" /> 
                    <Form.Control id="wd-password" defaultValue="123" placeholder="password" type="password" className="mb-2" /> 
                    <Form.Control id="wd-firstname" defaultValue="Alice" placeholder="First Name" className="mb-2" /> 
                    <Form.Control id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" className="mb-2" />
                    <Form.Control id="wd-dob" defaultValue="2000-01-01" type="date" className="mb-2" />
                    <Form.Control id="wd-email" defaultValue="alice@wonderland" type="email" className="mb-2" /> 
                    <Form.Select id="wd-role" defaultValue="FACULTY" className="mb-2">
                        <option value="USER">User</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="ADMIN">Admin</option>
                        <option value="STUDENT">Student</option>
                    </Form.Select>

                    <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
                    Sign out
                    </Button>
                </div>
            )}

        </div>
    );
}
    