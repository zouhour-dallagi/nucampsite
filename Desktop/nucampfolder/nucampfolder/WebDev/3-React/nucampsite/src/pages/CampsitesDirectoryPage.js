import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from './CampsiteDetail';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectRandomCampsite } from '../features/campsites/campsitesSlice';
const CampsitesDirectoryPage = () => {
    const selectedCampsite=selectRandomCampsite()
    return (
        <Container>
                 <Row>
                    <Button onClick ={()=> toggleCampsite()}>
                        select random campsite 
                    </Button>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;