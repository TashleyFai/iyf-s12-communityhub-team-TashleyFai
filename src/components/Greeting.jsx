function Greeting({ name = 'Guest', timeOfDay }) {
  return (
    <div>
      <h2>
        Good {timeOfDay}, {name}!
      </h2>
      <p>Welcome to CommunityHub.</p>
    </div>
  )
}

export default Greeting