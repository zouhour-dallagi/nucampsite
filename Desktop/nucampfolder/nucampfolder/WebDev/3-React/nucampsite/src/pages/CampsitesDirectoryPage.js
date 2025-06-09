import { Container, Row, Col} from 'reactstrap';
import CampsiteDetail from './CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { useState } from 'react';
import { selectAllCampsiteById } from '../features/campsites/campsitesSlice';
const CampsitesDirectoryPage = () => {
    const [campsiteId,setCampsiteId]=useState(0);
    const selectedCampsite=selectAllCampsiteById(campsiteId);
    return (
        <Container>
                 <Row>
                   
                <Col sm='5' md='7'>
                    <CampsitesList Campsite={selectAllCampsiteById} />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;