import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  assignments: [],
};
const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newModule: any = {
        _id: assignment.assignment_id,
        lessons: [],
        title: "",
        course: assignment.course_id,
        description: "",
        points: "",
        due_date: "",
        available_date: "",
        available_until_date: "",
      };
      state.assignments = [...state.assignments, newModule] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments} =
assignmentSlice.actions;
export default assignmentSlice.reducer;