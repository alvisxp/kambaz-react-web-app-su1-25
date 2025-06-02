import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from '../Modules/GreenCheckmark';
import DeletePopup from './delete';
export default function AssignmentControlButtons({
    assignmentId,
    deleteAssignment,
}: {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={handleShow} />
            <GreenCheckmark />
            <BsPlus />
            <IoEllipsisVertical className="fs-4" />
            <DeletePopup
                show={show}
                handleClose={handleClose}
                assignmentId={assignmentId}
                deleteAssignment={deleteAssignment}
            />
        </div>
    );
}