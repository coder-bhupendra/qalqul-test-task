import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filterCategory: null,
    filterTag: null
}


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterByCategory: (state, action) => {
            state.filterCategory = action.payload
        },
        filterByTag: (state, action) => {
            state.filterTag = action.payload
        }
    }
})


export const { filterByCategory, filterByTag } = filterSlice.actions;
const { reducer } = filterSlice;
export default reducer;