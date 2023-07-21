
const Loading = () => {

    const loadingMessages = [
        "Our hamster is running on his wheel as fast as he possibly can...",
        "Due to cutbacks, the infinite number of monkeys must now share one typewriter..",
        "The word 'Queue' is actually just the letter 'Q' Followed by four other letters patiently waiting their turn...",
        "A watched pot never boils, but it also doesn't return an error message..",
        "Patience is a virtue, but shouting 'hurry up!' might make you feel better..."

    ]

    const randomNumber = Math.floor((Math.random() * loadingMessages.length))
    console.log(randomNumber)
    console.log(loadingMessages[randomNumber])

    return (
        <div className="loading">
            <h1>Loading...</h1>
            <h2>{loadingMessages[randomNumber]}</h2>
        </div>
    )
}

export default Loading