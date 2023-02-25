import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientData from './data/clientdata.json'
import AppNav from './components/AppNav';
import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage';
import CreateClient from './pages/CreateClientPage';
import UpdateClient from './pages/UpdateClient';

function App() {
  
  // const[clients, setClients] = useState(ClientData.map(( client, index) => {
  //   return {
  //     id: index,
  //     company_name: client['Company Name'],
  //     siem_solution: client['Siem Solution'],
  //     firewall_solution: client['Firewall Solution'],
  //     // image: client.multimedia.length ? client.multimedia[0] : null,
  //     av_solution: client['AV Solution'],
  //     access_control_solution: client['Access Control Solution'],
  //     created_date: client['Created Date']
  //   }})
  //   )
  
  
  return (
    <div className="App">
      <AppNav />
      <Router> 
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/clients/:clientID' element={<ClientPage />} />
          <Route exact path='/sections/ADDClient/' element={<CreateClient />} />
          <Route exact path='/clients/:clientID/update' element={<UpdateClient />} />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
