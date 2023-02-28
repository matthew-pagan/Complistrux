// import {Image, Container, Row, Col } from 'react-bootstrap'
import { Media } from 'reactstrap';


function Client ({ company_name, siem_solution, firewall_solution, av_solution, access_control_solution, image}){

    const imageurl = `http://127.0.0.1:8000${image}`
    console.log(image)
    return(
        <Media>
            <Media left>
            { image && <img className="image"  src={imageurl}/> }
            </Media>
            <br></br>
            <Media body className="body">
            <h1>{company_name}</h1>
            <hr></hr>
            <h2>Current tech stack:</h2>
            <p><strong>Siem Solution: </strong>{siem_solution}</p>
            <p><strong>Firewall Solution: </strong> {firewall_solution}</p>
            <p><strong>Anti-Virus Solution: </strong>{av_solution}</p>
            <p><strong>Access Control Method: </strong>{access_control_solution}</p>
            </Media>
      </Media>

    )
}
export default Client;



// <Container >
        //     <Row className='client'>
        //         <Col lg='3' className='my-col' >
        //             {image ? <Image  width={image.width} height={image.height} rounded src={image.url}/>
        //                          : <></>
        //             } 
        //         </Col>
        //         <Col lg='9'>
        //             <Row>
        //                 <h1>{company_name}</h1>
        //             </Row>
        //             <Row>
        //                 <p>{image}</p>
        //             </Row>
        //             <Row>
        //                 <h2>Current tech stack:</h2>
        //             </Row>
        //             <Row>
        //                 <p><strong>Siem Solution: </strong>{siem_solution}</p>
        //             </Row>
        //             <Row>
        //                 <p><strong>Firewall Solution: </strong> {firewall_solution}</p>
        //             </Row>
        //             <Row>
        //                 <p><strong>Anti-Virus Solution: </strong>{av_solution}</p>
        //             </Row>
        //             <Row>
        //                 <p><strong>Access Control Method: </strong>{access_control_solution}</p>
        //             </Row>
        //         </Col>        
        //     </Row>
        // </Container>