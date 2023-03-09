import React from 'react';
import { deleteClientByID } from '../api/clientsAPI';
import { useNavigate } from 'react-router-dom';


function ConfirmUI(props) {
  const navigate = useNavigate()

  return (
    <div className="popup-overlay">
      <h1>Are you sure?</h1>
      <p>You want to delete this Client?</p>
      <button className="btn" onClick={props.onClose}>No</button>
      <button className='btn'
        onClick={() => {
          deleteClientByID(props.clientID)
          navigate('/home')
          window.location.reload(false);
          props.onClose();
        }}
      >
        Yes, Delete it!
      </button>
    </div>
  );
}

export default ConfirmUI;
