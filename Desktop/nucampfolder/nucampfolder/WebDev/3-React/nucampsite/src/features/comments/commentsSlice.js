import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from '../../app/shared/COMMENTS';
const initialState={
    commentsArray: COMMENTS
}
const commentsSlice= createSlice({
    name:'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addComment action.payload:', action.payload);
            console.log('addComment state.commentsArray:', state.commentsArray);
            const nextId = Math.max(...state.commentsArray.map(c => c.id), 0) + 1;
            const newComment = {
                id: nextId,
                ...action.payload
            };
            state.commentsArray.push(newComment);
        }}
});
export const commentsReducer=commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
export const selectAllCampsiteById=(campsiteId)=>(state)=>{
    return state.comments.commentsArray.filter(
        (comment)=>comment.campsiteId===parseInt(campsiteId)
    );
};
