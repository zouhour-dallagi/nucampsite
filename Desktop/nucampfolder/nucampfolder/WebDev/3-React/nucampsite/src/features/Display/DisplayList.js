import React from "react";
import {Col,Row} from 'reactstrap';
//import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotion/promotionsSlice";
import { selectFeaturedPartner } from "../partners/PartnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { useSelector } from "react-redux";
const DisplayList=()=>{
     const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);
        console.log('display items:', items);
    return(
        <Row>
            {items.map((item,idx)=>{
                return(
                    item&&(
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={item}/>
                    </Col>
                ));
            })}
        </Row>
    );
};
export default DisplayList;