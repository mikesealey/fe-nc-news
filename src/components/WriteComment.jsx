import { useEffect, useState } from "react"
import { postComment } from "../utils/api"
import { useParams } from "react-router-dom"

const WriteComment = () => {
    const [username, setUsername] = useState("")
    const [body, setBody] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [returned, setReturned] = useState(null) // 
    const { article_id } = useParams()
    
    const submitFn = (event) => {
        event.preventDefault()
        setSubmitted(true)
        setUsername("")
        setBody("")



        postComment(article_id, username, body)
        .then((response) => {
            setReturned(response)
        })

    }

    return (
        <form  onSubmit={(event)=> {submitFn(event)}} className="write-comment">
            <h2>Write Comment HERE!</h2>
            <label>Username</label>
            <input 
            required 
            type="text" 
            id="description" 
            placeholder="Your Name Here"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}></input>

            <label>Comment Input</label>
            <input 
            required 
            type="text" 
            id="description" 
            placeholder="Tell us what you think..."
            value={body}
            onChange={(e)=>{setBody(e.target.value)}}></input>

            <button disabled={submitted}>Submit</button>
            
            {/* This div should say that the comment is being sent, and disapear when the comment can be seen in the DB */}
        <div >{submitted && !returned? <p className="submit-comment-response">Posting comment</p> : null}</div>
        <div >{returned && returned.message ? <p>An error occured while posting your comment</p> : null} </div>
        </form>
    )
}

export default WriteComment