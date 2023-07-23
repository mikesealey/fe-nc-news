const ErrorPage = () => {
    const errorMessages = [
        "Task failed successfully",
        "Technology was a mistake",
        "The presence of this error message indicates that we are, for the time being, safe from the AI-pocalypse",
        "Something's gone wrong. If you're looking for a scapegoat, blame Mike.",
        "We've come a long way since rubbing sticks together to make fire, but this request was apparently a step too far."
        ]

    const randomNumber = Math.floor((Math.random() * errorMessages.length))


    return (
        <div className="body">
            <h2>Error</h2>
            <p>
                {errorMessages[randomNumber]}
                <br/><br/>
                Please try again, or click Home to navigate back to safety.
            </p>

            </div>
    )
}

export default ErrorPage