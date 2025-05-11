export default function Modules() {
    return (
        <div>
            <button id="wd-add-module-collapse"> Collapse All</button>
            <button id="wd-add-module-progress"> View progress</button>
            <select id="wd-module-publish" defaultValue="Publish All">
                <option value="Publish All">Publish All</option>
            </select>
            <button id="wd-add-module-module">+ Module</button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className = "wd-title"> Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
                    <ul className="wd-lesson">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item"> Introduction to the Course</li>
                                <li className="wd-content-item"> Learn What is Web Development</li>
                            </ul>
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item"> Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item"> Full Stack Developer - Chapter 2 - Creating Us</li>
                            </ul>
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item"> Introduction to the course</li>
                                <li className="wd-content-item"> Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className = "wd-title"> Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className = "wd-lesson">
                        <li className = "wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn Advanced HTML</li>
                                <li className="wd-content-item">Learn Git and deployment </li>
                            </ul>
                            <span className="wd-title">SLIDES</span>
                            <ul className = "wd-content">
                                <li className="wd-content-item"> Learn Advanced HTML</li>
                                <li className="wd-content-item"> Learn Git and deployment</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}