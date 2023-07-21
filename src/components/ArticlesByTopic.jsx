import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { fetchAllArticles, fetchArticlesByTopic } from "../utils/api"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"
import SortBy from "./SortBy"

const ArticlesByTopic = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [articles, setArticles] = useState([])
    const topic = searchParams.get("topic")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchAllArticles(topic)
        .then((response) => {
            setArticles(response)
            setLoading(false)
        })
    }, [])


    return (
        <>
        {loading ? <Loading/> : null}
        <div className="body articles" key="articles-body">
            <SortBy setSortBy={""}/>
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