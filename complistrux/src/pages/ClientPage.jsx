import React, { Component } from 'react';
import Client from '../components/Client'
import { fetchClientByID, getDocs } from '../api/clientsAPI.js';
import { BrowserRouter, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteClientByID } from '../api/clientsAPI.js';
import Backdrop from '../components/backdrop';
import { useNavigate } from "react-router-dom"
import { confirmAlert } from 'react-confirm-alert';
import "react-confirm-alert/src/react-confirm-alert.css";
import ConfirmUI from '../components/ConfirmUI';

function ClientPage(props) {
  const [ client, setClient ] = React.useState(null);
  const [ status, setStatus ] = React.useState('404: Client Not Found')
  const [ GenDocsUrl, setGenDocsUrl] = React.useState();

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

  React.useEffect(() => {
    setGenDocsUrl(`http://127.0.0.1:8000/complistrux_api/get_documents/${clientID}`)

}, [client])

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
    getDocs()
  }

  // const GetDocURL = `http://127.0.0.1:8000/complistrux_api/get_documents/${client.id}`

  return (
    <div>
      {client ? <Client {...client} /> :
        <span>{status}</span>
      }
      <hr></hr>
      <a className="btn" href={GenDocsUrl}> Get Documents</a>
      <button className="btn" onClick={handleTechStackChange} clientprop={client}> Change Tech Stack</button>
      <button className="btn" onClick={handleClientDelete}> Delete Client</button>
    </div>
  );
}

export default ClientPage
