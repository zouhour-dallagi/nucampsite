import { CAMPSITES } from "../../app/shared/CAMPSITES";
export const selectAllCampsites=()=>{
    return CAMPSITES;
};
// export const selectRandomCampsite=()=>{
//     return CAMPSITES[Math.floor(CAMPSITES.length*Math.random())];
// };
export const selectAllCampsiteById=(id)=>{
    return CAMPSITES.find((campsite)=>campsite.id===id);
};
export const selectFeaturedCampsite=()=>{
    return CAMPSITES.find((campsite)=>campsite.featured);
}
