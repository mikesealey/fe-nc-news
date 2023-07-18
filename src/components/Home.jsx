import { useEffect, useState } from "react"
import { fetchAllArticles } from "../utils/api"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"

const Home = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetchAllArticles()
        .then((response) => {
            setIsLoading(false)
            setArticles(response)
        })
    }, [])


    return (
        <>
        <div id="loading">{ isLoading ?  <Loading/> : null }</div>
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