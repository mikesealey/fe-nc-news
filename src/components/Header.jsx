import React from "react"
import { Link } from "react-router-dom"

import Topics from "./Topics"
import Users from './Users'
import Search from './Search'

const Header = () => {
    console.log("In the header")
    return (
        <div id="header">
            <h1>NC News</h1>
            <nav>
                    <div><Link to="./">Home</Link></div>
                    <div><Link to="./topics">Topics</Link></div>
                    <div><Link to="./users">Users</Link></div>
                    <div><Link to="./search" >Search</Link></div>
            </nav>
        </div>
    )
}

export default Header