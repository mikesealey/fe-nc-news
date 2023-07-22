import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const SortBy = (props) => {

    const topic = props.topic
    const setTopic = props.setTopic
    const sortBy = props.sortBy
    const setSortBy =props.setSortBy
    const order = props.order
    const setOrder = props.setOrder

    const [searchParams, setSearchParams] = useSearchParams(props)

    const [sortByQuery, setSortByQuery] = useState()

    const setNewTopic = (event) => {
        props.setTopic(event.target.value)
    }

    const setNewParams = (event) => {
        let queryOrder = event.target.value.split("__")
            setSortBy(queryOrder[0])
            setOrder(queryOrder[1])

    }

    return (
    <div className="sort-by-bar">

        <form >
                <label htmlFor="sort-by">Sort by...</label>
                <select id="sort-by" name="sort-by" value={sortByQuery} onChange={setNewParams}>
                    <option value={"articles.created_at__DESC"}>Date (newest first)</option>
                    <option value={"articles.created_at__ASC"}>Date (oldest first)</option>
                    <option value={"comment_count__DESC"}>Most Comments</option>
                    <option value={"comment_count__ASC"}>Least Comments</option>
                    <option value={"articles.votes__DESC"}>Most Popular</option>
                    <option value={"articles.votes__ASC"}>Least Popular</option>
                </select>
            </form>
        </div>
    )
}

export default SortBy
