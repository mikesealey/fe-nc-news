import axios from "axios"
import { useSearchParams } from "react-router-dom";

const myApi = axios.create({baseURL: "https://nc-news-x8sg.onrender.com/api"})


export const fetchAllArticles = (topic, sortBy, order) => {
    // const topic = params.get("topic")
    // const sortBy = params.get("sort_by")
    // const order = params.get("order")

    console.log(`Filters: topic: ${topic}, sort_by: ${sortBy}, order: ${order}`)

    return myApi.get("/articles", {params: {topic: topic, sort_by: sortBy, order: order}})
    .then(({data}) => {
        return data
    })
    // myApi.get("/api/articles", {params: {topic: coding, sort_by: comment_count, order: ASC}})
}

export const fetchArticle = (props) => {
    return myApi.get(`/articles/${props}`)
    .then(({data}) => {
        return data
    })
}

export const fetchCommentsByArticleId = (props) => {
    return myApi.get(`/articles/${props}/comments`)
    .then(({data}) => {
        return data
    })
}

export const patchVotes = (props, vote) => {
    return myApi.patch(`/articles/${props}`, {inc_votes: vote})
    .then(({data}) => {
        return data
    })
}

export const postComment = (props, givenUsername, givenBody) => {
    return myApi.post(`/articles/${props}/comments`, {user_name: givenUsername, body: givenBody})
    .then(({data}) => {
        return data
    })
    .catch((err) => {
        return err
    })
}

export const fetchAllTopics = () => {
    return myApi.get(`/topics`)
    .then(({data}) => {
        return data
    })
}

// export const fetchArticlesByTopic = (props) => {
//     return myApi.get(`/articles?topic=${props}`)
//     .then(({data}) => {
//         return data
//     })
// }