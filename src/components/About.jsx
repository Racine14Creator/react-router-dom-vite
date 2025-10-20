import { Link, Outlet } from "react-router-dom";

export default function About() {
    return (
        <div>
            <h1>About Us</h1>
            <p>This page contains information about our application.</p>
            <p>this our <Link to="/about/team">team</Link> and our <Link to="/about/vision">vision</Link></p>
            <Outlet />
        </div>
    )
}