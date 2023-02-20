import React, { Component } from 'react';
import ClientList from '../components/ClientList'
import { fetchClients, searchClients } from '../api/clientsAPI'
import { InputGroup, Input } from 'reactstrap'

function HomePage(props) {
  const [ clients, setClients ] = React.useState('');
  const [ searchText, setSearchText ] = React.useState('');

  // React.useEffect(() => {
  //   const fetchClientsAsync = async () => {
  //     try {
  //         const clientsJson = await fetchClients();
  //         setClients(clientsJson);
  //       }
  //     catch (e) {
  //       console.error('error fetching clients: ', e);
  //     }
  //   }
  //    fetchClientsAsync()},
  //   []);

  // React.useEffect( () => {

  //   async function getClients() {
  //     const res = await fetch("http://127.0.0.1:8000/complistrux_api/")
  //     const body = await res.json()
  //     setClients(body)
  //   }
  //   getClients()
  // }, [])

  const handleSearch = (e) => setSearchText(e.target.value);

  return (
    <div>
      <InputGroup>
        <Input onChange={handleSearch} type="text" placeholder="Search" />
      </InputGroup>
      <ClientList clients={clients} />
    </div>
  );
}





// import ClientList from "../components/ClientList"
// import Search from "../components/Search"


// function HomePage ({clients}){


//   return (
//       <div>
//           <Search clients={clients}/>
//           <hr/>
//           <h2>All clients</h2>
//           <ClientList clients={clients}/>
//       </div>
//   )
// }

export default HomePage