import { useEffect, useState } from "react"
import { fetchAllArticles } from "../utils/api"
import ArticleCard from "./ArticleCard"

const Home = () => {
    const [articles, setArticles] = useState([])

    useEffect(()=> {
        fetchAllArticles()
        .then((response) => {
            setArticles(response)
        })
    }, [])


    return (
        <>
        <div className="body articles" key="articles-body">
            {articles.map((article) => {
                return (
                            <ArticleCard props={article} key={article.article_id}></ArticleCard>
                )
            })}
        </div>
        </>
    )
}

export default Home