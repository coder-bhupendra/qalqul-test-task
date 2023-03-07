import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import articleService from "../Services/Articles.service";

export const getArticlesList = createAsyncThunk(
  "articles/getArticlesList",
  async () => {
    const data = await articleService.getArticlesList();
    return data
  }
)

export const addLikes = createAsyncThunk(
  "articles/addLikes",
  async (body) => {
    const data = await articleService.addLikes(
      body
    );
    return data
  }
);

export const addDislikes = createAsyncThunk(
  "articles/addDislikes",
  async (body) => {
    const data = await articleService.addDislikes(
      body
    );
    return data
  }
);

const initialState = {
  articles: [],
  loading: false,
  message: "",
  likes: null,
  dislikes: null,
}

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesList.pending, (state) => {
        state.loading = true;
        state.message = "";
      })
      .addCase(getArticlesList.fulfilled, (state, action) => {
        state.articles = action.payload
        state.loading = false
        state.filterCategory = null
        state.filterTag = null
      })
      .addCase(getArticlesList.rejected, (state, action) => {
        state.message = action.error?.message;
      })
      .addCase(addLikes.fulfilled, (state, action) => {
        const { id, likes } = action.payload
        // state.likes = action.payload
        const existingArticle = state.articles.find((article) => article.id === id);
        if (existingArticle) {
          existingArticle.likes = likes;
        }
      })
      .addCase(addLikes.rejected, (state, action) => {
        state.message= action.error?.message
      })
      .addCase(addDislikes.fulfilled, (state, action) => {
        const { id, dislikes } = action.payload
        // state.dislikes = action.payload
        const existingArticle = state.articles.find((article) => article.id === id);
        if (existingArticle) {
          existingArticle.dislikes = dislikes;
        }
      })
      .addCase(addDislikes.rejected, (state, action) => {
        state.message = action.error?.message;
      });
  },
})

const { reducer } = articlesSlice;
export default reducer;
