import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { fetchAllArticles } from "../utils/api"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"
import SortBy from "./SortBy"

const Home = (props) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [topic, setTopic] = useState("")
    const [sortBy, setSortBy] = useState("created_at")
    const [order, setOrder] = useState("DESC")

    useEffect(()=> {
        fetchAllArticles(topic, sortBy, order)
        .then((response) => {
            setIsLoading(false)
            setArticles(response)
        })
    }, [topic, sortBy, order])

    console.log(">>>", topic, sortBy, order)


    return (
        <>
        <p>topic={topic} sortBy={sortBy} order={order} </p>
        <div id="loading">{ isLoading ?  <Loading/> : null }</div>
        <div className="body articles" key="articles-body">
            <SortBy setTopic={setTopic} setSortBy={setSortBy} setOrder={setOrder}/>
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