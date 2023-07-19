export const upVote = () => {
    if (!upVoted) {
        setUpVoted(true)
        setVotes(votes + 1)
        return patchVotes(article_id, 1)
        .then((response) => {
            setVotes(response.votes)
        })
        .catch((err) => {
            console.log(err.response.status)
            console.log(err.response.data.msg)
            setVoteError(true)
        })
    } else {
        setUpVoted(false)
        setVotes(votes -1)
        return patchVotes(article_id, -1)
        .then((response) => {
            setVotes(response.votes)
        })
        .catch((err) => {
            console.log(err.response.status)
            console.log(err.response.data.msg)
            setVoteError(true)
        })
    }
    
}

export const downVote = () => {
    if (!downVoted) {
        setDownVoted(true)
        setVotes(votes -1)
        return patchVotes(article_id, -1)
        .then((response) => {
            setVotes(response.votes)
        })
        .catch((err) => {
            console.log(err.response.status)
            console.log(err.response.data.msg)
            setVoteError(true)
        })
    } else {
        setDownVoted(false)
        setVotes(votes + 1)
        return patchVotes(article_id, 1)
        .then((response) => {
            setVotes(response.votes)
        })
        .catch((err) => {
            console.log(err.response.status)
            console.log(err.response.data.msg)
            setVoteError(true)
        })

    }

}

