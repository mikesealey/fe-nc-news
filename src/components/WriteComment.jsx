import { useEffect, useImperativeHandle, useState } from "react"
import { postComment } from "../utils/api"
import { useParams } from "react-router-dom"

const WriteComment = () => {
    const [username, setUsername] = useState("")
    const [body, setBody] = useState("")
    const [returned, setReturned] = useState("")
    const { article_id } = useParams()

    const submitFn = () => {
        event.preventDefault()

        useEffect(()=>{
            postComment(article_id, username, body)
            .then((response)=> {
                console.log(response)
            })
        })

    }

    /**Passing the username and comment to the API doesn't currently work, but we're breaking off to do some solo katas. */

    return (
        <form className="write-comment">
            <h2>Write Comment HERE!</h2>
            <label>Username</label>
            <input 
            required 
            type="text" 
            id="description" 
            placeholder="Your Name Here"
            value={username}
            onChange={(event)=>{setUsername(event.target.value)}}></input>

            <label>Comment Input</label>
            <input 
            required 
            type="text" 
            id="description" 
            placeholder="Tell us what you think..."
            value={body}
            onChange={(event)=>{setBody(event.target.value)}}></input>

            <button onClick={submitFn}>Submit</button>
        </form>
    )
}

export default WriteComment