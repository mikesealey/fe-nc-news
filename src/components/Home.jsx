import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { fetchAllArticles } from "../utils/api"
import ArticleCard from "./ArticleCard"
import Loading from "./Loading"
import SortBy from "./SortBy"

const Home = (props) => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const topic = props.topic
    const setTopic = props.setTopic
    const sortBy = props.sortBy
    const setSortBy =props.setSortBy
    const order = props.order
    const setOrder = props.setOrder

    useEffect(()=> {
        fetchAllArticles(topic, sortBy, order)
        .then((response) => {
            setIsLoading(false)
            setArticles(response)
        })
    }, [topic, sortBy, order])

    return (
        <>
        <div id="loading">{ isLoading ?  <Loading/> : null }</div>
        <div className="body articles" key="articles-body">
            <SortBy topic={topic} setTopic={setTopic} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder}/>
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