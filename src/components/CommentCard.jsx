import { useContext, useState } from "react"
import { UserContext } from "../contexts/LoggedInUser"
import { deleteComment } from "../utils/api"

const CommentCard = ({props}) => {
    const { user } = useContext(UserContext)
    const [deleting, setDeleting] = useState("Delete Comment")

    let confirmation = "Delete Comment"
    const deleteCommentButton = () => {
        console.log("Clicked")
        setDeleting("Deleting comment") 
        deleteComment(props.comment_id)
    }


    return (
        
            <article className="comment-card">
                <div className="details">
                {props.author === user ? <button disabled={deleting === "Deleting comment"} onClick={()=>{deleteCommentButton()}}>{deleting}</button> : null}
                    <h3>{props.author}</h3>
                    <h3>{props.created_at}</h3>
                    <h3>{props.votes}</h3>
                </div>
                <div className="comment-body">
                    {props.body}
                </div>
            </article>
    )
}

export default CommentCard