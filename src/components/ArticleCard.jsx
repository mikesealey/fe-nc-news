import { Link } from "react-router-dom"


const ArticleCard = ({props}) => {


    return (
                <Link to={`/${props.article_id}`}>
                    <div className="article-card" >
                        <div className="headline"><h2>{props.title} by {props.author}</h2></div>
                        <div className="details">
                            <div>{props.created_at}</div>
                            <div>{props.topic}</div>
                            <div>{props.votes} votes </div>
                            <div>{props.comment_count} comments</div>
                        </div>
                    </div>
                </Link>   

    )
}

export default ArticleCard