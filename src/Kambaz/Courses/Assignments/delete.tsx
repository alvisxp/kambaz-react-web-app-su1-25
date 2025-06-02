import { Button, Modal } from "react-bootstrap";

export default function DeletePopup({
    show,
    handleClose,
    assignmentId,
    deleteAssignment,
}: {
    show: boolean;
    handleClose: () => void;
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Do you want to delete the Assignment?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        deleteAssignment(assignmentId);
                        handleClose();
                    }}
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}