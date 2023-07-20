import axios from "axios"

const myApi = axios.create({baseURL: "https://nc-news-x8sg.onrender.com/api"})

export const fetchAllArticles = (props) => {

    return myApi.get(`/articles`)
    .then(({data}) => {
        return data
    })
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