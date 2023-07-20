import { Link } from "react-router-dom"


const TopicCard = ({props}) => {

    return (
        <Link to={`/articles?topic=${props.slug}`}>
            <div className="topic-card" key={props.slug}>
                <h2>{props.slug}</h2>
                <h3>{props.description}</h3>
                </div>
        </Link>
    )
}

export default TopicCard