import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    debounceValue: " ",
};

const debounceSlice = createSlice({
    name: "debounceSlice",
    initialState,
    reducers: {
        setDebounceValue: (state, action) => {
            state.debounceValue = action.payload?.debounceValue;
        },
    },
});

export const { setDebounceValue } = debounceSlice.actions;

export default debounceSlice.reducer;
