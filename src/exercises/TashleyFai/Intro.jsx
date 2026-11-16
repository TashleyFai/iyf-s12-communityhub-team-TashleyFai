const today = new Date().toDateString()
const hour = new Date().getHours()

function Intro() {
  const name = 'Faith'

  let message = ''

  if (hour < 12) {
    message = 'Good morning!'
  } else if (hour < 18) {
    message = 'Good afternoon!'
  } else {
    message = 'Good evening!'
  }

  return (
    <div>
      <h1>Hello, my name is {name}</h1>
      <p>I am a student at IYF Weekend Academy.</p>
      <p>I am learning React and web development.</p>
      <p>My goal is to become a software engineer.</p>
      <p>Today's date is: {today}</p>
      <h2>{message}</h2>
    </div>
  )
}

export default Intro