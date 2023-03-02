import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { addClient } from '../api/clientsAPI'
import axios from 'axios';

function CreateClient() {

  const navigate = useNavigate()

  const [companyName, setCompanyName] = useState()
  const [siemSolution, setSiemSolution] = useState()
  const [firewallSolution, setFirewallSolution] = useState()
  const [avSolution, setAvSolution] = useState()
  const [accessControlSolution, setAccessControlSolution] = useState()
  const [image, setImage] = useState()

  const handleCompanyNameChange = (e) => setCompanyName(e.target.value)
  const handleSiemSolutionChange = (e) => setSiemSolution(e.target.value)
  const handleFirewallSolutionChange = (e) => setFirewallSolution(e.target.value)
  const handleAvSolutionChange = (e) => setAvSolution(e.target.value)
  const handleAccessControlSolutionChange = (e) => setAccessControlSolution(e.target.value)
  const handleImageChange = (e) => setImage(e.target.files[0])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const clientObject = {
  //     company_name: companyName,
  //     siem_solution: siemSolution,
  //     firewall_solution: firewallSolution,
  //     image: image,
  //     av_solution: avSolution,
  //     access_control_solution: accessControlSolution,
  //     created_date: new Date().toISOString()
  //   }
  //   console.log(clientObject)
  //   addClient(clientObject)
  //   // navigate('/')
  //   // window.location.reload(false);
  // }



  const handleSubmit = (e) => {
    e.preventDefault()
    let clientObject = new FormData(); 
      clientObject.append('company_name', companyName);
      clientObject.append('siem_solution', siemSolution);
      clientObject.append('firewall_solution', firewallSolution);
      clientObject.append('image', image);
      clientObject.append('av_solution', avSolution);
      clientObject.append('access_control_solution', accessControlSolution);
      clientObject.append('created_date', new Date().toISOString());
    addClient(clientObject)
    navigate('/home')
    window.location.reload(false);
  }
  
  const checkError = (e) => {
    console.log(e)
  }

  return(
    <>
      <h2>Create A Client:</h2>
      {/* {errors && <h4>{JSON.stringify(errors)}</h4>} */}
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
      <input type="file" id="image" accept="image/png, image/jpeg"  onChange={handleImageChange} required/>
      <br></br>
      <button className="btn" onClick={handleSubmit}>Submit</button>
    </>
  )}

  export default CreateClient
