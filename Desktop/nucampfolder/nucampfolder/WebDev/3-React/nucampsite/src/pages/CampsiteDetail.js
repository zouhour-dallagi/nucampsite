import { Card,CardImg,CardText,CardBody,Col } from "reactstrap";
import CommentsList from "../features/comments/CommentsList";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllCampsiteById } from "../features/campsites/campsitesSlice";
const CampsiteDetail = () => {
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));
    console.log('campsite', campsite);

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        );
    }}
export default CampsiteDetail;