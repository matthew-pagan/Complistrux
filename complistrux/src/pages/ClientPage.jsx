import React, { Component } from 'react';
import Client from '../components/Client'
import { fetchClientByID } from '../api/clientsAPI.js';
import { BrowserRouter, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteClientByID } from '../api/clientsAPI.js';
import Backdrop from '../components/backdrop';
import { useNavigate } from "react-router-dom"
import { confirmAlert } from 'react-confirm-alert';
import "react-confirm-alert/src/react-confirm-alert.css";
import ConfirmUI from '../components/ConfirmUI';
import generateClientDocs from '../jsscriptfile/GenerateClientDocs.jsx';

function ClientPage(props) {
  const [ client, setClient ] = React.useState(null);
  const [ status, setStatus ] = React.useState('404: Client Not Found')
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const {clientID} = useParams()
  const navigate = useNavigate()

  React.useEffect(() => {
    const fetchClientAsync = async () => {
      try {
        const clientsJson = await fetchClientByID (clientID);
        setClient(clientsJson.result);
      } catch (e) {
        console.error('error fetching article: ', e);
      }
    };

    if (client=== null) {
      fetchClientAsync();
    }
  }, [client]);

  const handleClientDelete = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <BrowserRouter>
            <ConfirmUI onClose={onClose} clientID={clientID}/>   
          </BrowserRouter>       
        );
      }
    });
  };


  const handleTechStackChange = () => {
    navigate(`/clients/${client.id}/update`, {client})
  }

  const handleTechStackDocuments = () => {
    generateClientDocs(client)
  }

  return (
    <div>
      {client ? <Client {...client} /> :
        <span>{status}</span>
      }
      <hr></hr>
      <button className="btn" onClick={handleTechStackDocuments}> Get Documents</button>
      <button className="btn" onClick={handleTechStackChange} clientprop={client}> Change Tech Stack</button>
      <button className="btn" onClick={handleClientDelete}> Delete Client</button>
    </div>
  );
}

export default ClientPage
