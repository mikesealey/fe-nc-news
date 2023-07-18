import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../utils/api"
import CommentCard from "./CommentCard";

const Comments = () => {
    const { article_id } = useParams()
    const [comments, setComments]  = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetchCommentsByArticleId(article_id)
        .then((response) => {
            setIsLoading(false)
            setComments(response)
        })
    }, [])

    return (
        <div className="comments-list">
            {comments.map((comment)=> {
                return (
                    <CommentCard props={comment} key={comment.comment_id}></CommentCard>
                )
            })}

            
        </div>
    )
}

export default Comments