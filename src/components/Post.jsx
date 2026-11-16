import { useState } from 'react'

function Post(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedPost, setEditedPost] = useState(props.post)

  function handleSave() {
    if (editedPost.trim() === '') return

    props.onUpdate(editedPost)
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <>
          <input
            value={editedPost}
            onChange={(event) => setEditedPost(event.target.value)}
          />

          <button onClick={handleSave}>Save</button>

          <button onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <p>{props.post}</p>

          <button onClick={props.onLike}>
            Like Post
          </button>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={props.onDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  )
}

export default Post
