import { useContext, useEffect, useState } from 'react';
import { Data } from '../../Data';
import validateSubmit, { sanitizeInput } from '../../Validations/parksValidation';

export default function Item({ park }) {

    const { setDeleteParks, setEditParks, addMessage } = useContext(Data);
    const [errors, setErrors] = useState(new Set());
    const [delClick, setDelClick] = useState(false);

    const [input, setInput] = useState({
        title: '',
        height: '',
        park: 0
    });

    useEffect(() => {
        setInput({
            title: park.title,
        });
    }, [park]);

    const save = _ => {
        const data = {
            title: input.title
        }
        if (!validateSubmit(data, setErrors, addMessage)) {
            return;
        }
        setEditParks({...data,  id: park.id });
    }

    const cancel = _ => {
        setInput({
            title: park.title,
        });
        setErrors(new Set());
    }

    const remove = _ => {
        if (delClick) {
            setDeleteParks(park);
        } else {
            setDelClick(true);
            setTimeout(() => setDelClick(false), 1000);
        }

    }

    const changeInput = (e, prop) => {
        let value = e.target.value;
        value = sanitizeInput(value, prop);
        setInput(i => ({ ...i, [prop]: value }));
    }

    return (
        <div className="list-item">
            <div className="parks info">
                <input type="text" className={'title' + (errors.has('title') ? ' error' : '')} value={input.title} onChange={e => changeInput(e, 'title')} />
            </div>
            <div className="details">
            <div className="count">Types count: {park.types.length}</div>
            <div className="types-list">
                <ul>
                    {
                        park.types.map((t, i) => <li key={i}>{t}</li>)
                    }
                </ul>
            </div>
            </div>
            <div className="bottom">
                <div className="buttons">
                    <button className="small blue" onClick={save}>save</button>
                    {
                        !park.types.length ? <button className={'small ' + (delClick ? 'yellow' : 'red')} onClick={remove}>remove</button> : null
                    }
                    <button className="small yellow" onClick={cancel}>cancel</button>
                </div>
            </div>
        </div>
    );

}