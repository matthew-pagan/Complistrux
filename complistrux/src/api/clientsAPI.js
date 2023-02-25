

const BASE_URL = 'http://127.0.0.1:8000/complistrux_api/';


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

const addClient = async (clientObject) => {
  const response = await fetch(`${BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(clientObject)
    }
  )
  const data = await response.json();
  return data;
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

const changeClient = async (ID, clientObject) => {
  const response = await fetch(`${BASE_URL}${ID}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "PUT",
    body: JSON.stringify(clientObject)
    }
  )
  console.log(ID)
  console.log(clientObject)
  const data = await response.json();
  return data;
}

export {
  fetchClientByID,
  fetchClients,
  // fetchArticlesBySection,
  searchClients,
  addClient,
  deleteClientByID,
  changeClient
};