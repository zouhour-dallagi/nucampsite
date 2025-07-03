import { Col, Row } from 'reactstrap';
import Partner from './Partner';
import { useSelector } from 'react-redux';
import { selectAllPartners } from './PartnersSlice';
import { Error, Loading } from '../../components/Error';

function PartnersList() {
    const partners = useSelector(selectAllPartners);
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : (
        <Col className="mt-4">
            <Row>
                {partners.map((partner) => (
                    <div className="d-flex mb-5" key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                ))}
            </Row>
        </Col>
    );
}

export default PartnersList;