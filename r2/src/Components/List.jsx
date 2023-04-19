import { fb, is, tt } from './Icons';
export default function List({ data, setEditModalData, setDeleteModalData, ageSort }) {


    const doEdit = client => {
        setEditModalData(client);
    }

    const doDelete = client => {
        setDeleteModalData(client);
    }


    if (null === data) {
        return (
            <h2>LOADING...</h2>
        );
    }


    return (
        <div className="card mt-4">
            <div className="card-header">
                <h5>Clients List</h5>
                <div className="sf-box">
                    <div className="sort" onClick={ageSort}>Age sort</div>
                </div>
            </div>

            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        data.map(c => <li key={c.id} className="list-group-item">
                            <div className="client-line">
                                <div className="info">
                                    <div className="icon">
                                        {c.social === 'fb' ? fb : null}
                                        {c.social === 'is' ? is : null}
                                        {c.social === 'tt' ? tt : null}
                                    </div>
                                    <div className="name">{c.name}</div>
                                    <div className="age">{c.age}</div>
                                </div>
                                <div className="buttons">
                                    <button className="yellow small" onClick={_ => doEdit(c)}>Edit</button>
                                    <button className="red small" onClick={_ => doDelete(c)}>Delete</button>
                                </div>
                            </div>

                        </li>)
                    }
                </ul>
            </div>
        </div>
    );

}