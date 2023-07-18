import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../utils/api";
import Loading from "./Loading";

const Article = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetchArticle(article_id)
        .then((response)=> {
            setIsLoading(false)
            setArticle(response)
        })
    }, [])

    

    return (
        <article className="body"> 
            <div id="loading">{ isLoading ?  <Loading/> : null }</div>
            <div id="image-container">
                <img id="article-image" src={article.article_img_url}/>
            </div>
            <div id="details-container">
                <h1>{article.title}</h1>
                <h2>{article.author}</h2>
                <h2>{article.topic}</h2>
                <h2>{article.created_at}</h2>
            </div>

            <p className="article-body">
                {article.body}
            </p>
        </article>
    )
}

export default Article