
import { createSlice } from '@reduxjs/toolkit';
import {PARTNERS} from '../../app/shared/PARTNERS';


const initialState = {
    partnersArray: PARTNERS
};

const partnersSlice = createSlice({
    name: 'partners',
    initialState
});

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners=(state)=>{
    return state.PARTNERS.partnersArray;
};
export const selectFeaturedPartner=(state)=>{
    return state.PARTNERS.partnersArray.find((partner)=>partner.featured);
}