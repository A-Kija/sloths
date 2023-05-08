import { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (

        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h1>Login</h1>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            App Login
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                    <div className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={pass} onChange={e => setPass(e.target.value)} />
                            </div>
                            <button type="button" className="red">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}