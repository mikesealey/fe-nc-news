import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const SortBy = (props) => {

    const [searchParams, setSearchParams] = useSearchParams(props)

    // pass via props
    const [topic, setTopic] = useState()
    const [sortByQuery, setSortByQuery] = useState()

    const setNewTopic = (event) => {
        props.setTopic(event.target.value)
    }

    const setNewParams = (event) => {
        let queryOrder = event.target.value.split("__")
            props.setSortBy(queryOrder[0])
            props.setOrder(queryOrder[1])

    }

    return (
    <div className="sort-by-bar">
        <form >
                <label htmlFor="topic-selector">sort by...</label>
                <select id="topic-selector" name="topic-selector" value={topic} onChange={setNewTopic}>
                    <option value={""}>All Topics</option>
                    <option value={"coding"}>Coding</option>
                    <option value={"cooking"}>Cooking</option>
                    <option value={"football"}>Football</option>

                </select>
            </form>

        <form >
                <label htmlFor="sort-by">sort by...</label>
                <select id="sort=by" name="sort-by" value={sortByQuery} onChange={setNewParams}>
                    <option value={"articles.created_at__DESC"}>Date (newest first)</option>
                    <option value={"articles.created_at__ASC"}>Date (oldest first)</option>
                    <option value={"comment_count__DESC"}>Most Comments</option>
                    <option value={"comment_count__ASC"}>Least Comments</option>
                    <option value={"articles.votes__DESC"}>Most Popular</option>
                    <option value={"articles.votes__ASC"}>Least Popular</option>
                </select>
            </form>
            <h3>{topic ? `Showing you articles about ${topic}` : "Showing you all articles"}</h3>
    </div>
    )
}

export default SortBy

/**
 * sort by date
sort by comment count
sort by votes
flip the order between ascending and descending
 * 

.get method on searchParams on API call
 */