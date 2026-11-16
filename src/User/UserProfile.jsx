import UserCard from '../components/UserCard'

function UserProfile({ user }) {
  return (
    <section>
      <h2>Community Member</h2>
      <UserCard user={user} />
    </section>
  )
}

export default UserProfile