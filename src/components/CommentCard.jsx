import { useContext } from "react"
import {UserProvider } from "../contexts/LoggedInUser"
import { deleteComment } from "../utils/api"

const CommentCard = ({props}) => {

    const deleteCommentButton = () => {
        /** As it stands, this function simply invokes the function in the API,
         * It could have some additional features, but it currently functions
         *  albeit, in the most barebones implementation of the function.
         */
        deleteComment(props.comment_id)
    }


    return (
        
            <article className="comment-card">
                <div className="details">
                <button onClick={()=>{deleteCommentButton()}}>Delete Comment</button>
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