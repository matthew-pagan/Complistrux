import {Link} from 'react-router-dom'
import { useState } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Search from './Search'

import sections from '../data/sections.json' //data

function AppNav (props){

    const[navItems, setNavItems] = useState(sections)  
    
    return(
        <Navbar> 
            <Navbar.Brand>
                <img src="https://securestrux.com/wp-content/uploads/2020/10/SecureStrux-Cybersecurity-Firm-Logo.png" alt="securestruximage" width="60" />
                CompliStrux
            </Navbar.Brand>
            <Nav>
                <Nav.Link href='/'>
                    HOME
                </Nav.Link>
                
                {
                    navItems.map(((navItem, index) => {
                        return(
                            <Nav.Link key={index} href={`/#/sections/${navItem.value}`} onClick={() => console.log(navItem.value)}> 
                                {navItem.label}
                            </Nav.Link>
                        )
                    }))
                }
            </Nav>
        </Navbar>
    )
}
export default AppNav;