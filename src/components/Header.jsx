import React from "react"
import { Link } from "react-router-dom"

import Topics from "./Topics"
import Users from './Users'
import Search from './Search'

const Header = () => {
    console.log("In the header")
    return (
        <>
            <h1>NC News</h1>
            <nav>
                <ul>
                    <li> <Link to="./">Home</Link></li>
                    <li><Link to="./topics">Topics</Link></li>
                    <li><Link to="./users">Users</Link></li>
                    <li><Link to="./search" >Search</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header