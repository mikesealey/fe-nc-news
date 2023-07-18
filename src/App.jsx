import { useState } from 'react'
import { Route, Routes } from "react-router-dom"


import Header from './components/Header'
import Home from './components/Home'
import Article from './components/Article'
import Topics from './components/Topics'
import Users from './components/Users'
import Search from './components/Search'


function App() {
  const [articleId, setArticleId] = useState(1)


  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/articles/:article_id" element={<Article/>}> </Route>
      </Routes>
    </>
  )
}

export default App
