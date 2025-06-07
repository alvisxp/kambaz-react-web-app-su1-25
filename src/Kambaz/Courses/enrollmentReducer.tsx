import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [] as any[],
};
const enrollementSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, { payload: enrollmentDetails }) => {
      const newModule: any = {
        _id: enrollmentDetails._id,
        user: enrollmentDetails.user_id,
        course: enrollmentDetails.courseId,
      };
      state.enrollments = [...state.enrollments, newModule] as any;
    },
    unenrollFromCourse: (state, { payload: enrollmentDetails }) => {
      state.enrollments = state.enrollments.filter(
        (m: any) => (m.course !== enrollmentDetails.courseId && m.user == enrollmentDetails.user_id));
    },
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
  },
}
});
export const { enrollInCourse, unenrollFromCourse, setEnrollments } =
enrollementSlice.actions;
export default enrollementSlice.reducer;