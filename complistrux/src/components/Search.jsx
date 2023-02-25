import Form from 'react-bootstrap/Form'
import { useState, useEffect } from "react"
import ClientTeaser from "../components/ClientTeaser"


function Search ({clients}) {

    const [searchCompanyName, setSearchCompanyName] = useState('')
    const [results, setResults] = useState([])
    
    const handleChange = (event) => {
        const value = event.target.value
        console.log(`${value} val changed`)

        setSearchCompanyName(value)
    }

    useEffect( () => {
        if (searchCompanyName != ''){
            const filteredClients = clients.filter(client => client.company_name.toLowerCase().includes(searchCompanyName.toLowerCase()))
            setResults(filteredClients)
        }
        else {
            setResults([])
       }

    }, [searchCompanyName])

    return (
        <div>
            <Form >
            <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event)=>{handleChange(event)}}
                />
                
            </Form>
            <div>
            {
                results.length > 0
                ? <div >
                    <h2>Search Results:</h2>
                    {results.map((client) => (
                    <ClientTeaser key={client.id} {...client}/>
                ))}</div>
                : ''
            }
            </div>
        </div>
    )
}

export default Search