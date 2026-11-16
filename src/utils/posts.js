export function getTotalLikes(posts) {
  return posts.reduce((total, post) => {
    return total + post.likes
  }, 0)
}

export function searchPosts(posts, searchTerm) {
  return posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
}