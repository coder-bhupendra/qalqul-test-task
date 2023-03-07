import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    errorMessage: ""
};

const errorSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
        // state.errorMessage =
      console.log(6554, action)
    //   return { errorMessage: action.payload };
    },
    clearMessage: () => {
      console.log("clear")
      return { errorMessage: "" };
    },
  },
});

const { reducer, actions } = errorSlice;

export const { setMessage, clearMessage } = actions
export default reducer;