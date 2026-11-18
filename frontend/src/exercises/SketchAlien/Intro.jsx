export default function Intro ({ name, role, funFact}) {
    return (
        <div>
            <h1>Hello, I'm {name}</h1>
            <p>My role in the team is: {role}</p>
            <p>Fun Fact: {funFact}</p>
        </div>
    )
}