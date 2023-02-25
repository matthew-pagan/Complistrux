import ClientTeaser from "./ClientTeaser"
import React, { Component} from "react"
import { ListGroup, ListGroupItem } from "react-bootstrap"

function ClientList ({clients}) {
    
    // const HandleTitleClick = (client_id) => {
    //     console.log(client_id)
    // }

    // console.log(clients)

    const generateClientTeaser = () => {
        return clients.map((e) => (
            <ClientTeaser key={e.id} {...e}/>
        ))
    }

    return(
        <div>
            {clients && generateClientTeaser()}
        </div>
    );
}


export default ClientList;