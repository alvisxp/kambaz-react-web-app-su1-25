import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { enrollments } from '../Database';
const initialState = {
    enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
    name: 'enrollments',
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment: any = {
                _id: uuidv4(),
                user: enrollment.user,
                course: enrollment.course,
            };
            console.log('New enrollment ID:', newEnrollment._id);
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        deleteEnrollment: (state, { payload: enrollment }) => {
            state.enrollments = state.enrollments.filter(
                (a: any) => !(a.course === enrollment.course && a.user === enrollment.user)
            );
        },
        updateEnrollment: (state, { payload: enrollment }) => {
            state.enrollments = state.enrollments.map((a: any) =>
                a._id === enrollment._id ? enrollment : a
            ) as any;
        },
    },
});
export const { addEnrollment, deleteEnrollment, updateEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;