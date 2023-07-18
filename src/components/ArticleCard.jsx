import { Link } from "react-router-dom"

const ArticleCard = ({props}) => {

    return (
        
        <Link to={`/articles/${props.article_id}`}>
            <section className="article-card" >
                <section className="headline">
                    <h2>{props.title} by {props.author}</h2>
                </section>
                <section className="details">
                    <div>{props.created_at}</div>
                    <div>{props.topic}</div>
                    <div>{props.votes} votes </div>
                    <div>{props.comment_count} comments</div>
                </section>
            </section>
        </Link>   

    )
}

export default ArticleCard