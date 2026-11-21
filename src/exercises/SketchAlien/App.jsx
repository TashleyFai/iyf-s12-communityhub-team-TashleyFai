import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"

import Home from "./pages/Home"

import Posts from "./pages/Posts"

import Profile from "./pages/Profile"

import NotFound from "./pages/NotFound"

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="posts" element={<Posts />} />

          <Route path="profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>

    </BrowserRouter>

  )

}