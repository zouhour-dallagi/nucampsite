import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseURL';
export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);


export const postComment = createAsyncThunk(
    'comments/postComment',
    async (payload, { dispatch, getState }) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const { comments } = getState();
                payload.date = new Date().toISOString();
                payload.id = comments.commentsArray.length;
                dispatch(addComment(payload));
                resolve(payload); // Nécessaire pour compléter la promesse
            }, 2000);
        });
    }
);


const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        isLoading: true,
        errMess: null,
        commentsArray: []
    },
    reducers: {
        
        addComment: (state, action) => {
            state.commentsArray.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.commentsArray = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});


export const { addComment } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
