import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { assignments } from '../../Database';
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: uuidv4(),
                title: assignment.title,
                description: assignment.description,
                course: assignment.course,
                duedate: assignment.duedate,
                startdate: assignment.startdate,
                availableuntil: assignment.availableuntil,
            };
            console.log('New assignment ID:', newAssignment._id);
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        }
    },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;