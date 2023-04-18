import { useState } from 'react';
import { fb, is, tt } from './Icons';
export default function Create() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(14);
    const [social, setSocial] = useState('')

    return (
        <div className="card mt-4">
            <h5 className="card-header">Add New Client</h5>
            <div className="card-body">
                <div className="mb-4">
                    <label className="form-label">Client name</label>
                    <input type="text" className="form-control" value={name} />
                    <div className="form-text">Please enter client name.</div>
                </div>

                <div className="mb-4">
                    <label className="form-label"><span>Client age</span> <span><h3>{age}</h3></span></label>
                    <input type="range" class="form-range" min="14" max="99" value={age} />
                    <div className="form-text">Please slide to client age.</div>
                </div>

                <div className="mb-4">
                    <label className="form-label">Client Social Network</label>
                    <div className="icons-bin">
                        <div className={social === 'fb' ? 'icon checked' : 'icon'}>
                            {fb}
                        </div>
                        <div className={social === 'is' ? 'icon checked' : 'icon'}>
                            {is}
                        </div>
                        <div className={social === 'tt' ? 'icon checked' : 'icon'}>
                            {tt}
                        </div>
                    </div>
                    <div className="form-text">Please check client social network.</div>
                </div>


            </div>
        </div>
    )

}