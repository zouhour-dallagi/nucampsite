import { Card,CardImg,CardText,CardBody,Col } from "reactstrap";
import CommentsList from "../features/comments/CommentsList";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllCampsiteById } from "../features/campsites/campsitesSlice";
const CampsiteDetail=()=>{
    const {campsiteId}= useParams();
     const campsite = useSelector(selectAllCampsiteById(campsiteId));
    console.log('campsite:', campsite);
    if (!campsite) {
        return <p>Campsite not found</p>;
    }
      const { image, name, description, comments, id } = campsite;
    return(
         <>
       <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name}/>
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>    
        </Col>
        <Col md="12" className="m-4">
        <CommentsList comments={comments} campsiteId={id} />
      </Col>
    
</>);
}
export default CampsiteDetail;