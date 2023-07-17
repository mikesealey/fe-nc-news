import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Home = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get("https://nc-news-x8sg.onrender.com/api/articles", {})
        .then(({data}) => {
            console.log(data)
            setArticles(data)
        })
    }, [])

    return (
        <>
        <div className="body">
            {articles.map((article) => {
                return (
                        <Link to={`/${article.article_id}`}>
                            <div class="article-card" key={article.article_id}>
                                <div class="headline"><h2>{article.title} by {article.author}</h2></div>
                                <div class="details">
                                    <div>{article.created_at}</div>
                                    <div>{article.topic}</div>
                                    <div>{article.votes} votes </div>
                                    <div>{article.comment_count} comments</div>
                                </div>
                                <img class="thumbnail" src={article.article_img_url}/>    
                            </div>
                            
                        </Link>
                )
            })}
        </div>
        </>
    )
}

export default Home