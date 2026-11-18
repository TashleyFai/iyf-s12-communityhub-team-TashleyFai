import { useState } from 'react'

export default function IntroReact() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <div>
      <h2>Hello, {name || 'CommunityHub'}!</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}