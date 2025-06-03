import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { useSelector } from "react-redux";
export default function AssignmentRightControl() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      {currentUser != null && currentUser.role === "FACULTY" && <BsPlus className="fs-3"/>}
      <IoEllipsisVertical className="fs-4" />
    </div> );}