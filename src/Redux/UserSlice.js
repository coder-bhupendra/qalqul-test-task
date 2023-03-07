import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: "",
    likedArticles: [],
    message: ""
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            console.log("user", action)
            state.user = action.payload.name
            state.likedArticles= []
        },
        likeArticles: (state, action) => {
            const article = action.payload;
            if (!state.likedArticles.some((liked) => liked.id === article.id)) {
                state.likedArticles.push(article);
            }
        }
    }
})

export const { updateUser, likeArticles } = userSlice.actions;
const { reducer } = userSlice;
export default reducer;