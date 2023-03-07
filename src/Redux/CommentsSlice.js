import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import commentService from "../Services/Comments.service";

export const getComments = createAsyncThunk(
    "comments/getComments",
    async () => {
        const data = await commentService.getComments();
        return data
    }
)

export const addComments = createAsyncThunk(
    "comments/addComments",
    async (
        body
    ) => {
        const data = await commentService.addComments(body);
        return data
    }
);

const initialState = {
    comments: [],
    isLoading: false,
    comment: "",
    message:""
}

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getComments.pending, (state) => {
                state.isLoading = true;
                state.message= ""
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.comments = action.payload
            })
            .addCase(getComments.rejected, (state, action) => {
                state.isLoading = false;
                state.message = action.error?.message;
            })
            .addCase(addComments.fulfilled, (state, action) => {
                state.comment = action.payload
                state.comments.push(action.payload)
                state.message= "Comment added successfully"
            })
    },
})


const { reducer } = commentsSlice;
export default reducer;