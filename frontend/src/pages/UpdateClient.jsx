import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { changeClient } from '../api/clientsAPI'
import { useParams } from 'react-router-dom'
import React from 'react'
import { fetchClientByID } from '../api/clientsAPI'
import { connect } from 'react-redux'



function UpdateClient(isAuthenticated) {

  const BASE_URL = 'http://18.220.193.144:8000';

  const navigate = useNavigate()
  const {clientID} = useParams()

  const [ client, setClient ] = React.useState(null);

  React.useEffect(() => {
    const fetchClientAsync = async () => {
      try {
        const clientsJson = await fetchClientByID(clientID);
        setClient(clientsJson.result);
      } catch (e) {
        console.error('error fetching article: ', e);
      }
    };

    if (client === null) {
      fetchClientAsync();

    }
  }, []);

  const clientprop = {...client}

  React.useEffect(() => {
    setCompanyName(clientprop.company_name)
    setSiemSolution(clientprop.siem_solution)
    setFirewallSolution(clientprop.firewall_solution)
    setAvSolution(clientprop.av_solution)
    setAccessControlSolution(clientprop.access_control_solution)
    setImage(clientprop.image)

}, [clientprop.company_name])

  console.log(clientprop.company_name)

  const stringvar = clientprop.company_name

  const [companyName, setCompanyName] = useState()
  const [siemSolution, setSiemSolution] = useState()
  const [firewallSolution, setFirewallSolution] = useState()
  const [avSolution, setAvSolution] = useState()
  const [accessControlSolution, setAccessControlSolution] = useState()
  const [image, setImage] = useState()
  const id = Number(clientID)

  const handleCompanyNameChange = (e) => setCompanyName(e.target.value)
  const handleSiemSolutionChange = (e) => setSiemSolution(e.target.value)
  const handleFirewallSolutionChange = (e) => setFirewallSolution(e.target.value)
  const handleAvSolutionChange = (e) => setAvSolution(e.target.value)
  const handleAccessControlSolutionChange = (e) => setAccessControlSolution(e.target.value)
  const handleImageChange = (e) => setImage(e.target.files[0])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(companyName)
    console.log(siemSolution)
    let clientObject = new FormData(); 
      clientObject.append('company_name', companyName);
      clientObject.append('siem_solution', siemSolution);
      clientObject.append('firewall_solution', firewallSolution);
      if(typeof image !== "string"){clientObject.append('image', image);
  }
      clientObject.append('av_solution', avSolution);
      clientObject.append('access_control_solution', accessControlSolution);
      clientObject.append('created_date', new Date().toISOString());
    changeClient(clientID, clientObject)
    navigate(`/clients/${clientID}`)
    window.location.reload(false);
  }


  const checkError = (e) => {
    console.log(e)
  }



  if (isAuthenticated.isAuthenticated == true){
    return(
      <>
      <h2>Update Client: {clientID}</h2>
      <img className="image2"src={`${BASE_URL}${image}`}></img>
      {/* {errors && <h4>{JSON.stringify(errors)}</h4>} */}
      <p>{}</p>
      <form>
        <label htmlFor="CompanyName">Company Name:</label>
        <input value={companyName} name="companyName" onChange={handleCompanyNameChange}></input>
        <br></br>
        <label htmlFor="siemSolution">Siem Solution:</label>
        <input value={siemSolution} name="siemSolution" onChange={handleSiemSolutionChange}></input>
        <br></br>
        <label htmlFor="firewallSolution">Firewall Solution:</label>
        <input value={firewallSolution} name="firewallSolution" onChange={handleFirewallSolutionChange}></input>
        <br></br>
        <label htmlFor="avSolution">Anti-Virus Solution:</label>
        <input value={avSolution} name="avSolution" onChange={handleAvSolutionChange}></input>
        <br></br>
        <label htmlFor="acSolution">Access Control Solution:</label>
        <input value={accessControlSolution} name="accessControlSolution" onChange={handleAccessControlSolutionChange}></input>
        <br></br>
        <br></br>
        <label htmlFor="image">Upload Client Logo (JPEG or PNG):</label>
        <input className="textaligncenter" type="file" id="image" accept="image/png, image/jpeg"  onChange={handleImageChange}/>
        <br></br>
        <br></br>
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </form>
    </>
    )
  }
  else {
    return (
      <div>
        <h1>Please Login to View Page!</h1> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
export default connect(mapStateToProps)(UpdateClient);