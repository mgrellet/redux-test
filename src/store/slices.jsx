import {createSlice} from "@reduxjs/toolkit";

export const empSlice = createSlice({
    name: 'myEmployees',
    initialState: {
        employees: []
    },
    reducers: {
        saveValue: (state, action) => {
            state.employees = [...state.employees, action.payload]
        }
    }
})

export const lobSlice = createSlice({
    name: 'myLob',
    initialState: {
        lob: []
    },
    reducers: {

    }
})

export const {saveValue} = empSlice.actions
