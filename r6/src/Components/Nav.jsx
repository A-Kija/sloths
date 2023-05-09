import { useContext } from 'react';
import Link from './Link';
import User from './User';
import { Store } from '../Store';

export default function Nav() {

    const { user } = useContext(Store);

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="home">Home</Link>
            </li>
            {
                user
                    ? <li className="nav-item">
                        <Link className="nav-link" to="profile">My Profile</Link>
                    </li>
                    : null
            }
            {
                user && user.role === 'admin'
                    ? <li className="nav-item">
                        <Link className="nav-link" to="admin">Admin Dashbord</Link>
                    </li>
                    : null
            }

            <li>
                <User />
            </li>
        </ul>
    )
}