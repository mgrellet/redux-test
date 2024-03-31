import {configureStore} from "@reduxjs/toolkit";
import {empSlice, lobSlice} from "./slices.jsx";

export default configureStore({
    reducer: {
        myEmployees: empSlice.reducer,
        myLob: lobSlice.reducer
    },

});
