import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { courses } from '../Database';

const initialState = {
    courses: courses
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addCourse: (state, { payload: course }) => {
            const newCourse = {
                _id: uuidv4(),
                name: course.name,
                number: course.number,
                startDate: course.startDate,
                endDate: course.endDate,
                description: course.description,
                department: course.department,
                credits: course.credits
            };
            state.courses = [...state.courses, newCourse]; 
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter((course) => course._id !== courseId); 
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((existingCourse) =>
                existingCourse._id === course._id ? course : existingCourse
            ); 
        }
    },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;