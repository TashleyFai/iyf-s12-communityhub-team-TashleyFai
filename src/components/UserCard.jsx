function UserCard({ user }) {
  return (
    <article>
      <h3>{user.name}</h3>
      <p>{user.role}</p>
    </article>
  )
}

export default UserCard