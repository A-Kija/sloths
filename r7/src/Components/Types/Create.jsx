import { useContext, useState } from 'react';
import { Data } from '../../Data';

export default function Create() {

    const { setCreateTypes } = useContext(Data);

    const [input, setInput] = useState({
        title: '',
    });

    const changeInput = (e, prop) => {
        let value = e.target.value;
        setInput(i => ({...i, [prop]: value}));
    }

    const create = _ => {
        setCreateTypes({
            title: input.title,
        });
        setInput({
            title: '',
        });
    }

    return (
        <div className="card m-3">
            <h2 className="card-header color-yellow">Create new type</h2>
            <div className="card-body">
                <h5 className="card-title color-gray">Save the planet. Add more types!</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Type title</label>
                                <input type="text" className="form-control" value={input.title} onChange={e => changeInput(e, 'title')} />
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="button" className="green" onClick={create}>create!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}