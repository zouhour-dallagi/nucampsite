import React from "react";

import{Row,Col} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { CAMPSITES } from '../../app/shared/CAMPSITES';
//import { selectAllCampsites } from "./campsitesSlice";
const CampsitesList = ({setCampsiteId}) => {
  return (
    <Row className="ms-auto">
    {CAMPSITES.map((campsite) => (
      
        <Col md="5" className="m-4" key={campsite.id} onClick={()=>setCampsiteId(campsite.id)}>
        <CampsiteCard campsite={campsite} />
         </Col>)
)}
</Row>
  );
};

export default CampsitesList;
