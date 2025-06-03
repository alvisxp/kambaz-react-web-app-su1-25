import { RxDragHandleDots2 } from "react-icons/rx";
import { PiNotePencilBold } from "react-icons/pi";
import { useSelector } from "react-redux";
export default function AssignmentItemLeftControl() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <span className="float-start">
        <RxDragHandleDots2 className="fs-4" />
        {currentUser != null && currentUser.role === "FACULTY" && <PiNotePencilBold className="fs-3 text-success"/>}
    </span> );}