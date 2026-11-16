import PostCard from './PostCard'

function PostList({ posts, onLike, onDelete }) {
  return (
    <section id="posts">
      <h2>Community Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share!</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={() => onLike(post.id)}
            onDelete={() => onDelete(post.id)}
          />
        ))
      )}
    </section>
  )
}

export default PostList