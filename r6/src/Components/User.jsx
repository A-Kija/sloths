import { useContext } from 'react';
import Link from './Link';
import { Store } from '../Store';

export default function User() {

    const { user, setLoginRequest } = useContext(Store);

    const logout = _ => {
        setLoginRequest({
            action: 'logout',
            id: user.id
        })
    }


    return (
        <div className="user">
            {
                user
                    ? <div className="user-logged" style={{ backgroundColor: user.color }}>
                        <span>{user.email}</span>
                        <a className="login" onClick={logout}>Logout</a>
                    </div>
                    : <div className="user-not-logged">
                        <Link className="login" to="login">Login</Link>
                    </div>
            }


        </div>
    )
}