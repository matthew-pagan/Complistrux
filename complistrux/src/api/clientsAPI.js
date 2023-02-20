const BASE_URL = 'http://127.0.0.1:8000/complistrux_api/';

// const fetchArticleByID = async (articleID) => {
//   const response = await fetch(`${BASE_URL}/${articleID}`);
//   const data = await response.json();
//   return data;
// };


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

// const addArticle = async (articleObject) => {
//   const response = await fetch(`${BASE_URL}`, {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify(articleObject)
//     }
//   )
//   const data = await response.json();
//   return data;
// }

export {
  // fetchArticleByID,
  fetchClients,
  // fetchArticlesBySection,
  searchClients,
  // addArticle
};