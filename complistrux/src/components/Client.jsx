import {Image, Container, Row, Col } from 'react-bootstrap'
// import Image from 'react-bootstrap/Image'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


function Client ({ company_name, siem_solution, firewall_solution, av_solution, access_control_solution, image}){

    return(
        <Container >
            <Row className='client'>
                <Col lg='3' className='my-col' >
                    {image ? <Image  width={image.width} height={image.height} rounded src={image.url}/>
                                 : <p> image not found </p> 
                    } 
                </Col>
                <Col lg='9'>
                    <Row>
                        <h1>{company_name}</h1>
                    </Row>
                    <Row>
                        <p>{image}</p>
                    </Row>
                    <Row>
                        <p>{siem_solution}</p>
                    </Row>
                    <Row>
                        <p>{firewall_solution}</p>
                    </Row>
                    <Row>
                        <p>{av_solution}</p>
                    </Row>
                    <Row>
                        <p>{access_control_solution}</p>
                    </Row>
                </Col>
            
                            
            </Row>
        </Container>
    )
}
export default Client;