import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    enrollments: enrollments,
};
const enrollementSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, { payload: enrollmentDetails }) => {
      const newModule: any = {
        _id: uuidv4(),
        user: enrollmentDetails.user_id,
        course: enrollmentDetails.courseId,
      };
      state.enrollments = [...state.enrollments, newModule] as any;
    },
    unenrollFromCourse: (state, { payload: enrollmentDetails }) => {
      state.enrollments = state.enrollments.filter(
        (m: any) => (m.course !== enrollmentDetails.courseId && m.user == enrollmentDetails.user_id));
    },
}
});
export const { enrollInCourse, unenrollFromCourse } =
enrollementSlice.actions;
export default enrollementSlice.reducer;