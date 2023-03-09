import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import moment from 'moment';

// function ArticleTeaser (props){
function ClientTeaser ({id, company_name, created_date, image}){
    
    const created_date_formatted = moment(created_date).format('MMMM Do YYYY, h:mm:ss a')
    // console.log(new Date().toISOString())
    const imageurl = `http://18.220.193.144:8000${image}`

    return(
        <Container>
            <hr/>
            <Row>
                <Col lg='1'>
                    <h4>{id}</h4>
                </Col>
                <Col lg ='2'>
                    <img className="image2"  src={imageurl}/>
                </Col>
                <Col lg='4'>
                    <h3>
                        <Link to={`/clients/${id}`} >{company_name}</Link>
                    </h3>
                </Col>
                <Col lg='5'>
                    <h5>{created_date_formatted}</h5>
                </Col>
            </Row>
        </Container>
    )
}
export default ClientTeaser;