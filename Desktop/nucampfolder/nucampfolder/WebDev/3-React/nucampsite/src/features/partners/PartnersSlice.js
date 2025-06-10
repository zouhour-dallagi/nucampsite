import React from 'react';
import {PARTNERS} from '../../app/shared/PARTNERS';
import { selectAllCampsiteById } from '../campsites/campsitesSlice';
export const selectAllPartners=()=>{
    return PARTNERS;
}
export const selectFeaturedPartner=()=>{
    return PARTNERS.find((partner)=>partner.featured);
}