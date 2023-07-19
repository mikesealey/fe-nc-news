import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../utils/api";
import { patchVotes } from "../utils/api";
import Loading from "./Loading";
import Comments from "./Comments";
import WriteComment from "./WriteComment";

const Article = () => {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [voteError, setVoteError] = useState(false)
    const [votes, setVotes] = useState(0)
    const [upVoted, setUpVoted] = useState(false)
    const [downVoted, setDownVoted] = useState(false)


    useEffect(()=> {
        fetchArticle(article_id)
        .then((response)=> {
            setIsLoading(false)
            setArticle(response)
            setVotes(response.votes)
        })
    }, [])

    const upVote = () => {
        if (!upVoted) {
            setUpVoted(true)
            setVotes(votes + 1)
            return patchVotes(article_id, 1)
            .then((response) => {
                setVotes(response.votes)
            })
            .catch((err) => {
                setVoteError(true)
                setVotes(votes)
                setUpVoted(false)
            })
        } else {
            setUpVoted(false)
            setVotes(votes -1)
            return patchVotes(article_id, -1)
            .then((response) => {
                setVotes(response.votes)
            })
            .catch((err) => {
                setVoteError(true)
                setVotes(votes)
                setUpVoted(false)
            })
        }
        
    }

    const downVote = () => {
        if (!downVoted) {
            setDownVoted(true)
            setVotes(votes -1)
            return patchVotes(article_id, -1)
            .then((response) => {
                setVotes(response.votes)
            })
            .catch((err) => {
                setVoteError(true)
                setVotes(votes)
                setDownVoted(false)
            })
        } else {
            setDownVoted(false)
            setVotes(votes + 1)
            return patchVotes(article_id, 1)
            .then((response) => {
                setVotes(response.votes)
            })
            .catch((err) => {
                setVoteError(err)
                setVoteError(true)
                setVotes(votes)
                setDownVoted(false)
            })

        }

    }

    return (
        <>
        <article className="body"> 
            <div id="loading">{ isLoading ?  <Loading/> : null }</div>
            <div id="image-container">
                <img id="article-image" src={article.article_img_url}/>
            </div>
                <h1>{article.title}</h1>
            <div id="details-container">
                <h2>{article.author}</h2>
                <h2>{article.topic}</h2>
                <h2>{article.created_at}</h2>
                <h2>{votes} votes</h2>
                <div className="buttons">
                    <button id="upvote" onClick={()=> {upVote(upVote)}} disabled={downVoted}>UPVOTE</button>
                    <button id="downvote" onClick={()=> {downVote(downVote)}} disabled={upVoted}>DOWNVOTE</button>
                    <div id="voteError">{voteError ? <p>Error at API call</p> : null}</div>
                </div>
            </div>

            <p className="article-body">
                {article.body}
            </p>
        </article>
        <WriteComment/>
        <Comments/>



        </>
    )
}

export default Article