import Loading from "./Loading"
import { useState } from "react"

const CommentCard = ({props}) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
            <article className="comment-card">
                <div className="details">
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