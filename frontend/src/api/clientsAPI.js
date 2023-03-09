import axios from "axios";

const BASE_URL = 'http://18.220.193.144:8000/complistrux_api/';


const fetchClientByID = async (ID) => {
  const response = await fetch(`${BASE_URL}${ID}`);
  const data = await response.json();
  return data;
};

const fetchClients = async (filters = null) => {
  const url = filters ? `${BASE_URL}?filter={"where":${filters}}` : BASE_URL;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const searchClients = async (textToSearchFor) => {
  const response = await fetch(`${BASE_URL}?filter={"where":{"company_name":{"ilike":"${textToSearchFor}"}}}`)
  const data = await response.json();
  return data;
}

const addClient = (clientObject) => {
  axios.post(`${BASE_URL}`, clientObject, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
}

const deleteClientByID = async (ID) => {
  const response = await fetch(`${BASE_URL}${ID}`,{
  headers: {
    'Content-Type': 'application/json'
  },
  method: "DELETE"
}
  )
  const data = await response.json();
  return data;
};

const changeClient = (ID, clientObject) => {
  axios.put(`${BASE_URL}${ID}`, clientObject, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err))
}

const getDocs = async (filters=null) => {
  const response = await fetch(`${BASE_URL}get_documents/`);
  console.log(response)
  return response;
};

export {
  fetchClientByID,
  fetchClients,
  // fetchArticlesBySection,
  searchClients,
  addClient,
  deleteClientByID,
  changeClient,
  getDocs
};