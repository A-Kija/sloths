import Link from "./Link";

export default function Nav() {

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="home">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="profile">My Profile</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="admin">Admin Dashbord</Link>
            </li>
        </ul>
    )
}