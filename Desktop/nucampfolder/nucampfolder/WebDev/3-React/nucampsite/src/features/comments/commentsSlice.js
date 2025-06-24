import { createSlice } from "@reduxjs/toolkit";
const initialState={
    commentsArray: COMENTS
}
const commentsSlice= createSlice({
    name:'comments',
    initialState
});
export const commentsReducer=commentsSlice.reducer;
export const selectAllCampsiteById=(campsiteId)=>(state)=>{
    return state.comments.commentsArray.filter(
        (comment)=>comment.campsiteId===parseInt(campsiteId)
    );
};