import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import {Route, Routes, Navigate} from "react-router";
import TOC from "./TOC";
export default function Labs() {
    return (
        <div>
            <h1>Labs</h1>
            <h2>Alvis Prabhu</h2>
            <h2>
                {" "}
                Github repository {" "}
                <a href="https://github.com/alvisxp/kambaz-react-web-app-su1-25" > Link</a>
            </h2>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2/*" element={<Lab2 />} />
                <Route path="Lab3/*" element={<Lab3 />} />
            </Routes>
        </div>
    );
}