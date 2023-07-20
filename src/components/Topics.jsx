import { useEffect, useState } from "react"
import Loading from "./Loading"
import { fetchAllTopics } from "../utils/api"
import TopicCard from "./TopicCard"

const Topics = () => {
    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetchAllTopics()
        .then((response) => {
            setIsLoading(false)
            setTopics(response.topics)
        })
    }, [])

    return (
        <div key="TopicsList">
        <div id="loading">{ isLoading ? <Loading/> : null}</div>
        <div className="body topics">
            {topics.map((topic) => {
                return (
                    <TopicCard props={topic}/>
                )
            })}
        </div>
        
        </div>
    )
}

export default Topics