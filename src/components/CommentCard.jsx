import { useContext } from "react"
import { UserContext } from "../contexts/LoggedInUser"
import { deleteComment } from "../utils/api"

const CommentCard = ({props}) => {
    const { user } = useContext(UserContext)


    const deleteCommentButton = () => {
        if (props.author === user) {
            deleteComment(props.comment_id)
        } else {
            console.log("That's not your comment to delete, pal!")
        }
    }


    return (
        
            <article className="comment-card">
                <div className="details">
                {props.author === user ? <button onClick={()=>{deleteCommentButton()}}>Delete Comment</button> : null}
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