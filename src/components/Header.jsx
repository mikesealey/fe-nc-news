import { Link } from "react-router-dom"
import { useContext } from "react"

import Topics from "./Topics"
import Users from './Users'
import Search from './Search'
import { UserContext } from "../contexts/LoggedInUser"


const Header = () => {
    const { user } = useContext(UserContext)
    return (
        <header >
            <h1>NC News</h1>
            <p id="logged-in-user">Logged in as _{user}</p>
            <nav>
                    <div><Link to="./">Home</Link></div>
                    <div><Link to="./topics">Topics</Link></div>
                    <div><Link to="./users">Users</Link></div>
                    <div><Link to="./search" >Search</Link></div>
            </nav>
        </header>
    )
}

export default Header