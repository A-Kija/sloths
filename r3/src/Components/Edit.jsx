import { useEffect, useState } from 'react';
import { fb, is, tt } from './Icons';

export default function Edit({ editModalData, setEditModalData, setEditData }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState(14);
    const [social, setSocial] = useState('');

    useEffect(() => {
        if (null === editModalData) {
            return;
        }

        setName(editModalData.name);
        setAge(editModalData.age);
        setSocial(editModalData.social);

    }, [editModalData]);

    const save = _ => {
        setEditData({
            name,
            age,
            social,
            id: editModalData.id 
        });
        setEditModalData(null);
    }

    const doName = e => {
        setName(e.target.value);
    }

    const doAge = e => {
        const ageNow = parseInt(e.target.value);
        setAge(ageNow);
        if (ageNow < 30) {
            setSocial('tt');
        } else if (ageNow < 60) {
            setSocial('is');
        } else {
            setSocial('fb');
        }
    }

    const doSocial = s => {
        setSocial(s);
    }

    if (null === editModalData) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Client</h5>
                        <button type="button" className="btn-close btn" onClick={_ => setEditModalData(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mt-4">
                            <div className="card-body p-3">
                                <div className="mb-4">
                                    <label className="form-label">Client name</label>
                                    <input type="text" className="form-control" value={name} onChange={doName} />
                                    <div className="form-text">Please enter client name.</div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label"><span>Client age</span> <span><h3>{age}</h3></span></label>
                                    <input type="range" className="form-range" min="14" max="99" value={age} onChange={doAge} />
                                    <div className="form-text">Please slide to client age.</div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Client Social Network</label>
                                    <div className="icons-bin">
                                        <div className={social === 'fb' ? 'icon checked' : 'icon'} onClick={_ => doSocial('fb')}>
                                            {fb}
                                        </div>
                                        <div className={social === 'is' ? 'icon checked' : 'icon'} onClick={_ => doSocial('is')}>
                                            {is}
                                        </div>
                                        <div className={social === 'tt' ? 'icon checked' : 'icon'} onClick={_ => doSocial('tt')}>
                                            {tt}
                                        </div>
                                    </div>
                                    <div className="form-text">Please check client social network.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="blue small" onClick={save}>Save</button>
                        <button type="button" className="red small" onClick={_ => setEditModalData(null)}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}