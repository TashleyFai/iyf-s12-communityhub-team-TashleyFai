function PostCard({ post, onLike, onDelete }) {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content}</p>

      <p>By: {post.author}</p>
      <p>Date: {post.date}</p>
      <p>Likes: {post.likes}</p>

      <button onClick={onLike}>Like</button>
      <button onClick={onDelete}>Delete</button>
    </article>
  )
}

export default PostCard