import UserCard from './UserCard'

function UserList({ users }) {
  return (
    <section>
      <h2>Community Members</h2>

      {users.length === 0 ? (
        <p>No community members yet.</p>
      ) : (
        users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      )}
    </section>
  )
}

export default UserList