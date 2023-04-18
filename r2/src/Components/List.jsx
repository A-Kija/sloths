import { fb, is, tt } from './Icons';
export default function List({ data }) {

    if (null === data) {
        return (
            <h2>LOADING...</h2>
        );
    }


    return (
        <div className="card mt-4">
            <h5 className="card-header">Clients List</h5>
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

                                </div>
                            </div>

                        </li>)
                    }
                </ul>
            </div>
        </div>
    );

}