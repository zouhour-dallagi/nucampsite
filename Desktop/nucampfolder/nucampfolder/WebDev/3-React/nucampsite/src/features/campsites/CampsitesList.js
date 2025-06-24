import React from "react";
import{Row,Col} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { useSelector } from "react-redux";
import { selectAllCampsites } from "./campsitesSlice";
//import { selectAllCampsites } from "./campsitesSlice";
const CampsitesList=({setCampsiteId})=>{
const campsites=useSelector(selectAllCampsites);
console.log('campsites',campsites)

  return (
    <Row className="ms-auto">
    {CAMPSITES.map((campsite) =>{return (
      
        <Col md="5" className="m-4" key={campsite.id} onClick={() => setCampsiteId(campsite.id)}  >
        <CampsiteCard campsite={campsite} />
         </Col>)
    })}
</Row>
  );
};

export default CampsitesList;
