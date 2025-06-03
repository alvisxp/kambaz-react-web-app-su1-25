import ModuleEditor from "./ModuleEditor";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { FaBan } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ModulesControls({ moduleName, setModuleName, addModule }:
    { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const { currentUser } = useSelector((state: any) => state.accountReducer);
 return (
    <div id="wd-modules-controls" className="text-nowrap pb-2">
        {currentUser != null && currentUser.role === "FACULTY" && <span><Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn" onClick={handleShow}>
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Module
        </Button>
        <Dropdown className="float-end me-1">
            <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
                <GreenCheckmark /> Publish All
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item id="wd-publish-all">
                    <GreenCheckmark /> Publish All
                </Dropdown.Item>
                <Dropdown.Item id="wd-publish-all-modules-and-items">
                    <GreenCheckmark /> Publish all modules and items
                </Dropdown.Item>
                <Dropdown.Item id="wd-publish-modules-only">
                    <GreenCheckmark /> Publish modules only
                </Dropdown.Item>
                <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                    <FaBan className="me-1 mb-1 text-gray fs-5"/> Unpublish all modules and items
                </Dropdown.Item>
                <Dropdown.Item id="wd-unpublish-modules-only">
                <FaBan className="me-1 mb-1 text-gray fs-5"/> Unpublish modules only
                </Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown></span>}
        <Button variant="secondary" className="text-black me-1 float-end" id = "wd-view-progress" size = "lg">View Progress</Button>
        <Button variant="secondary" className="text-black me-1 float-end" size = "lg" id = "wd-collapse-all">Collapse All</Button>
        {currentUser != null && currentUser.role === "FACULTY" && <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
       moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />}
    </div>
 );
}