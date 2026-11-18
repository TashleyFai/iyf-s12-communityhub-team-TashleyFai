import { useState } from 'react'

export default function CommentSection() {
  const [comments, setComments] = useState(['Great post!'])
  const [text, setText] = useState('')

  const addComment = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    setComments([...comments, text])
    setText('')
  }

  return (
    <div>
      <h3>Comments ({comments.length})</h3>
      {comments.map((c, i) => <p key={i}>{c}</p>)}
      <form onSubmit={addComment}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a comment..." />
        <button type="submit">Comment</button>
      </form>
    </div>
  )
}