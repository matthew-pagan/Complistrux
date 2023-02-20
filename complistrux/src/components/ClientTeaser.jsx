import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

// function ArticleTeaser (props){
function ClientTeaser ({id, company_name, created_date}){
    return(
        <Container>
            <hr/>
            <Row>
                <Col lg='1'>
                    <h4>{id}</h4>
                </Col>
                <Col lg='4'>
                    <h2>
                        <Link to={`/clients/${id}`} >{company_name}</Link>
                    </h2>
                </Col>
                <Col lg='3'>
                    <h5>Created: {created_date}</h5>
                </Col>
            </Row>
        </Container>
    )
}
export default ClientTeaser;