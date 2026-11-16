import { useState } from 'react'

function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (title.trim() === '' || content.trim() === '') {
      return
    }

    onAddPost({
      title,
      content
    })

    setTitle('')
    setContent('')
  }

  return (
    <section>
      <h2>Create a Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="What would you like to share?"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <button type="submit">Share Post</button>
      </form>
    </section>
  )
}

export default CreatePost