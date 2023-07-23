import { useState } from 'react'
import { Route, Routes } from "react-router-dom"


import Header from './components/Header'
import Home from './components/Home'
import Article from './components/Article'
import Comments from "./components/Comments"
import Topics from './components/Topics'
import Users from './components/Users'
import Search from './components/Search'
import ErrorPage from './components/Error'



function App() {
  const [articleId, setArticleId] = useState(1)

    const [topic, setTopic] = useState("")
    const [sortBy, setSortBy] = useState("created_at")
    const [order, setOrder] = useState("DESC")


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/"  element={<Home topic={topic} setTopic={setTopic} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder} />}></Route>
        <Route path="/articles/:article_id" element={<Article/>}> </Route>
        <Route path="/articles/:article_id/comments" element={<Comments/>}></Route>
        <Route path="/articles/:article_id" ></Route>
        <Route path='topics' element={<Topics/>}></Route>
        <Route path="/articles" element={<Home topic={topic} setTopic={setTopic} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder} />} ></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
