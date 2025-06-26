import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/PartnersSlice';
import { promotionsReducer } from '../features/promotion/promotionsSlice';
import {campsitesReducer}  from '../features/campsites/campsitesSlice';
export const store = configureStore({
    reducer: {
        campsites:campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

