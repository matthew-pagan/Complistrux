import './App.css';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ClientData from './data/clientdata.json'
import AppNav from './components/AppNav';
import HomePage from './pages/HomePage';


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
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
