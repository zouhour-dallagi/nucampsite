import { Card,CardImg,CardText,CardBody,Col } from "reactstrap";
import CommentsList from "../features/comments/CommentsList";
const CampsiteDetail=({campsite})=>{
    const { image, name, description ,comments,id} = campsite;
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