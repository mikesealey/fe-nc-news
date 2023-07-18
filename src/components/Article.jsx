import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../utils/api";

const Article = ({props}) => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})

    useEffect((props)=> {
        fetchArticle(article_id)
        .then((response)=> {
            setArticle(response)
        })
    }, [])

    return (
        <article className="body"> 
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