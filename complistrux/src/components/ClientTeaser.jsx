import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import moment from 'moment';

// function ArticleTeaser (props){
function ClientTeaser ({id, company_name, created_date}){
    
    const created_date_formatted = moment(created_date).format('MMMM Do YYYY, h:mm:ss a')
    // console.log(new Date().toISOString())

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
                <Col lg='5'>
                    <h4>Created: {created_date_formatted}</h4>
                </Col>
            </Row>
        </Container>
    )
}
export default ClientTeaser;