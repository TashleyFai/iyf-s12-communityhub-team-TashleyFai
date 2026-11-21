
import { useState, useEffect } from 'react'

import PageLayout from './Layout/PageLayout'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import Greeting from './components/Greeting'
import UserList from './components/UserList'
import UserProfile from './User/UserProfile'

import Button from './shared/Button'
import Input from './shared/Input'
import Card from './shared/Card'

import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage'
import { getTotalLikes, searchPosts } from './utils/posts'

import './App.css'

function App() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  const [posts, setPosts] = useLocalStorage('communityhub-posts', [])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (data && posts.length === 0) {
      const formattedPosts = data.slice(0, 10).map((post) => ({
        id: post.id,
        title: post.title,
        content: post.body,
        author: `User ${post.userId}`,
        date: new Date().toLocaleDateString(),
        likes: 0
      }))

      setPosts(formattedPosts)
    }
  }, [data, posts.length, setPosts])

  const user = {
    name: 'Faith',
    role: 'Community Member'
  }

  const users = [
    { id: 1, name: 'Faith', role: 'Community Member' },
    { id: 2, name: 'Ireen', role: 'Team Member' }
  ]

  function handleAddPost(newPost) {
    const post = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: 'Faith',
      date: new Date().toLocaleDateString(),
      likes: 0
    }

    setPosts((currentPosts) => [...currentPosts, post])
  }

  function handleLikePost(id) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    )
  }

  function handleDeletePost(id) {
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== id)
    )
  }

  const filteredPosts = searchPosts(posts, searchTerm)
  const totalLikes = getTotalLikes(posts)

  return (
    <PageLayout>
      <Greeting name="Faith" timeOfDay="evening" />

      <h1>Welcome to CommunityHub!</h1>
      <p>Connect, share ideas and grow together.</p>

      <UserProfile user={user} />
      <UserList users={users} />

      <Card title="Community Statistics">
        <p>Total Posts: {posts.length}</p>
        <p>Total Likes: {totalLikes}</p>
      </Card>

      <CreatePost onAddPost={handleAddPost} />

      <section>
        <h2>Search Community Posts</h2>
        <Input
          label="Search by post title"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Type a title..."
        />
        <Button variant="secondary" onClick={() => setSearchTerm('')}>
          Clear Search
        </Button>
      </section>

      <section>
        {loading && <p>Loading posts...</p>}
        {error && <p>Error loading posts: {error}</p>}
        {!loading && !error && (
          <PostList
            posts={filteredPosts}
            onLike={handleLikePost}
            onDelete={handleDeletePost}
          />
        )}
      </section>
    </PageLayout>
  )
}

export default App
