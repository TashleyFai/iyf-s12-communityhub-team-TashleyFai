import { Link, Outlet } from "react-router-dom"

export default function Layout() {

  return (

    <div>

      <nav>

        <Link to="/">Home</Link> |{" "}

        <Link to="/posts">Posts</Link> |{" "}

        <Link to="/profile">Profile</Link>

      </nav>

      <Outlet />

    </div>

  )

}