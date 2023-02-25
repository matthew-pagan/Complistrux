import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { changeClient } from '../api/clientsAPI'
import { useParams } from 'react-router-dom'
import React from 'react'
import { fetchClientByID } from '../api/clientsAPI'

function UpdateClient(props) {

  const navigate = useNavigate()
  const {clientID} = useParams()

  const [ client, setClient ] = React.useState(null);

  React.useEffect(() => {
    const fetchClientAsync = async () => {
      try {
        const clientsJson = await fetchClientByID (clientID);
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

}, [clientprop.company_name])

  console.log(clientprop.company_name)

  const stringvar = clientprop.company_name

  const [companyName, setCompanyName] = useState()
  const [siemSolution, setSiemSolution] = useState()
  const [firewallSolution, setFirewallSolution] = useState()
  const [avSolution, setAvSolution] = useState()
  const [accessControlSolution, setAccessControlSolution] = useState()
  const id = Number(clientID)

  const handleCompanyNameChange = (e) => setCompanyName(e.target.value)
  const handleSiemSolutionChange = (e) => setSiemSolution(e.target.value)
  const handleFirewallSolutionChange = (e) => setFirewallSolution(e.target.value)
  const handleAvSolutionChange = (e) => setAvSolution(e.target.value)
  const handleAccessControlSolutionChange = (e) => setAccessControlSolution(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const clientObject = {
      id: Number(clientID),
      company_name: companyName,
      siem_solution: siemSolution,
      firewall_solution: firewallSolution,
      // image: client.multimedia.length ? client.multimedia[0] : null,
      av_solution: avSolution,
      access_control_solution: accessControlSolution,
      created_date: new Date().toISOString(),
    }
    console.log(clientObject)
    changeClient(clientID, clientObject)
    navigate(`/clients/${clientID}`)
  }


  const checkError = (e) => {
    console.log(e)
  }

  return(
    <>
      <h2>Update Client: {clientID}</h2>
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
        <label htmlFor="avSolution">Access Control Solution:</label>
        <input value={accessControlSolution} name="accessControlSolution" onChange={handleAccessControlSolutionChange}></input>
        <br></br>
        <br></br>
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )}

  export default UpdateClient