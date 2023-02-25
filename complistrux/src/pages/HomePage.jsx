import React, { Component } from 'react';
import ClientList from '../components/ClientList'
import { fetchClients, searchClients } from '../api/clientsAPI'
import { InputGroup, Input } from 'reactstrap'
import Search from "../components/Search"

function HomePage(props) {
  const [ clients, setClients ] = React.useState('');
  const [ searchText, setSearchText ] = React.useState('');

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

  return (
    <div>
      {/* <InputGroup>
        <Input onChange={handleSearch} type="text" placeholder="Search" />
      </InputGroup> */}
      <Search clients={clients}/>
      <h2>All Clients:</h2>
      <ClientList clients={clients} />
    </div>
  );
}


// import { useEffect, useState }from 'react';
// import ClientList from '../components/ClientList';

// function HomePage() {
//   const [ clients, setStuff ] = useState([]);

//   useEffect( () => {
//     async function getClients() {
//       const res = await fetch("http://localhost:8000/complistrux_api/")
//       const body = await res.json()
//       const data = body.result
//       setStuff(data)
//     }
//     getClients()
//   }, [])

//   return (
//     <div>
//       <ClientList clients={clients} />
//     </div>
//   );
// }

// export default HomePage


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