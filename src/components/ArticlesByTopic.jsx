import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { fetchArticlesByTopic } from "../utils/api"
import ArticleCard from "./ArticleCard"

const ArticlesByTopic = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [articles, setArticles] = useState([])
    const topic = searchParams.get("topic")

    useEffect(() => {
        fetchArticlesByTopic(topic)
        .then((response) => {
            setArticles(response)
        })
    }, [])


    return (
        <>
        <div className="body articles" key="articles-body">
        <h2>Articles about {topic}</h2>
            {articles.map((article) => {
                return (
                    <ArticleCard props={article} key={article.article_id}/>
                )
            })}
        </div>
        </>
    )
}

export default ArticlesByTopic