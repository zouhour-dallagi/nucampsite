import { configureStore } from '@reduxjs/toolkit';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/PartnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';
export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    }})
