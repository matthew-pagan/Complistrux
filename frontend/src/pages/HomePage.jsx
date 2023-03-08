import React, { Fragment, Component } from 'react';
import ClientList from '../components/ClientList'
import { fetchClients, searchClients } from '../api/clientsAPI'
import { InputGroup, Input } from 'reactstrap'
import Search from "../components/Search"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

function HomePage(isAuthenticated) {
  const [ clients, setClients ] = React.useState('');
  const [ searchText, setSearchText ] = React.useState('');

  console.log(isAuthenticated.isAuthenticated)

  React.useEffect(() => {
    const fetchClientsAsync = async () => {
      try {
          const clientsJson = await fetchClients();
          setClients(clientsJson.result);
        }
      catch (e) {
        console.error('error fetching clients: ', e);
      }
    }
     fetchClientsAsync()},
    []);


  const handleSearch = (e) => setSearchText(e.target.value);

  if (isAuthenticated.isAuthenticated == true){
    return(
      <div>
      <Search clients={clients}/>
      <h2>All Clients:</h2>
      <Container>
            <br></br>
            <Row>
                <Col lg='1'>
                    <h5>ID:</h5>
                </Col>
                <Col lg ='2'>
                  <h5>Logo:</h5>
                </Col>
                <Col lg='4'>
                  <h5>Client:</h5>
                </Col>
                <Col lg='5'>
                  <h5>Created:</h5>
                </Col>
            </Row>
        </Container>
      <ClientList clients={clients} />  
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Please Login to View Page!</h1> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(HomePage);