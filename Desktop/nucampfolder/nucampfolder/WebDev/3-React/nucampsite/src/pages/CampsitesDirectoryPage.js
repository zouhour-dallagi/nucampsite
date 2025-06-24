import { Container, Row, Col} from 'reactstrap';
import CampsiteDetail from './CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { useState } from 'react';
import { selectAllCampsiteById } from '../features/campsites/campsitesSlice';
import CommentsList from '../features/comments/CommentsList';

const CampsitesDirectoryPage = () => {
    const [campsiteId,setCampsiteId]=useState(0);
    const selectedCampsite=selectAllCampsiteById(campsiteId);
    return (
        <Container>
                 <Row>
                   
                <Col sm='5' md='7'>
                    <CampsitesList setCampsiteId={setCampsiteId} />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                     <CommentsList campsiteId={campsiteId} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;