import axios from "axios"

const myApi = axios.create({baseURL: "https://nc-news-x8sg.onrender.com/api"})

export const fetchAllArticles = (props) => {

    return myApi.get(`/articles`)
    .then(({data}) => {
        return data
    })
}

