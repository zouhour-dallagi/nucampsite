import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    campsitesArray: CAMPSITES
};
const campsitesSlice=createSlice({
    name:'campsites',
    initialState,
    reducers: {}
});
export const campsitesReducer= campsitesSlice.reducer;

export const selectAllCampsites=(state)=>{
    return state.campsites.campsitesArray;
};
// export const selectRandomCampsite=()=>{
//     return CAMPSITES[Math.floor(CAMPSITES.length*Math.random())];
// };
export const selectAllCampsiteById=(id)=>(state)=>{
    return state.campsites.campsitesArray.find(
        (campsite)=>campsite.id===parseInt(id)
    );
};
export const selectFeaturedCampsite=(state)=>{
    return state.campsites.campsitesArray.find((campsite)=>campsite.featured);
}
