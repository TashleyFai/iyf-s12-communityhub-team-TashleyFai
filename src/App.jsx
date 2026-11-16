
import { useState } from 'react'

import PageLayout from './Layout/PageLayout'

import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import Greeting from './components/Greeting'
import UserList from './components/UserList'

import UserProfile from './User/UserProfile'

import Button from './shared/Button'
import Input from './shared/Input'
import Card from './shared/Card'

import { getTotalLikes, searchPosts } from './utils/posts'

import './App.css'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My First Community Post',
      content: 'Hello everyone! Welcome to our community.',
      author: 'Faith',
      date: 'November 15, 2026',
      likes: 5
    },
    {
      id: 2,
      title: 'Learning React',
      content: 'Today I am learning how to build applications with React.',
      author: 'John',
      date: 'November 15, 2026',
      likes: 3
    },
    {
      id: 3,
      title: 'Technology and Education',
      content: 'Technology helps us learn new skills and share knowledge.',
      author: 'Mary',
      date: 'November 15, 2026',
      likes: 2
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const user = {
    name: 'Faith',
    role: 'Community Member'
  }

  const users = [
    { id: 1, name: 'Faith', role: 'Community Member' },
    { id: 2, name: 'John', role: 'Developer' },
    { id: 3, name: 'Mary', role: 'Designer' }
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

    setPosts([...posts, post])
  }

  function handleLikePost(id) {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    )
  }

  function handleDeletePost(id) {
    setPosts(posts.filter((post) => post.id !== id))
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

        <Button
          variant="secondary"
          onClick={() => setSearchTerm('')}
        >
          Clear Search
        </Button>
      </section>

      <PostList
        posts={filteredPosts}
        onLike={handleLikePost}
        onDelete={handleDeletePost}
      />
    </PageLayout>
  )
}

export default App
