function Greeting({ name = 'Guest', timeOfDay = 'day' }) {
  return (
    <section>
      <h2>
        Good {timeOfDay}, {name}!
      </h2>

      <p>Welcome to CommunityHub.</p>
    </section>
  )
}

export default Greeting
