import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    courses: [] as any[],
};
const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, { payload: course }) => {
      const newModule: any = {
        _id: course._id,
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        department: course.department,
        credits: course.credits,
        description: course.description,
      };
      // console.log("----Reached----")
      state.courses = [...state.courses, newModule] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (m: any) => m._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((m: any) =>
        m._id === course._id ? course : m
      ) as any;
    },
    setCourse: (state, { payload: course }) => {
        const newModule: any = {
          _id: course._id,
          name: course.name,
          number: course.number,
          startDate: course.startDate,
          endDate: course.endDate,
          department: course.department,
          credits: course.credits,
          description: course.description,
        };
        state.courses = [...state.courses, newModule] as any;
      },
    setCourses: (state, { payload: courses }) => {
        state.courses = courses;
    },
  },
});
export const { addNewCourse, deleteCourse, updateCourse, setCourses } =
courseSlice.actions;
export default courseSlice.reducer;