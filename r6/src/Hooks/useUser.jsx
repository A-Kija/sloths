import { useState } from "react";

export default function useUser() {

    const [user, setUser] = useState(null);

    const _validateUser = data => {
        return {
            pass: data.color || '',
            email: data.email || '',
            role: data.role || ''
        }
    }

    const _setUser = data => {
        setUser(_validateUser(data));
        localStorage.setItem('r6User', JSON.stringify(_validateUser(data)));
    }

    const _getUser = _ => {
        if (null === user) {
            const lsUser = localStorage.getItem('r6User');
            if (null === lsUser) {
                return null;
            }
            _setUser(JSON.parse(lsUser));
            return _validateUser(JSON.parse(lsUser));
        }
    }


    return [_getUser, _setUser];


}