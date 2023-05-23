import { useContext, useEffect, useState } from 'react';
import { Data } from '../../Data';
import validateSubmit, { sanitizeInput } from '../../Validations/typesValidation';

export default function Item({ type }) {

    const { setDeleteTypes, setEditTypes, typesCount, addMessage, parks } = useContext(Data);
    const [errors, setErrors] = useState(new Set());
    const [delClick, setDelClick] = useState(false);

    const [input, setInput] = useState({
        title: '',
        park: 0
    });

    useEffect(() => {
        setInput({
            title: type.title,
            park: type.park
        });
    }, [type]);

    const save = _ => {
        const data = {
            title: input.title,
            park: parseInt(input.park)
        }
        if (!validateSubmit(data, setErrors, addMessage)) {
            return;
        }
        setEditTypes({...data,  id: type.id });
    }

    const cancel = _ => {
        setInput({
            title: type.title,
            park: type.park
        });
        setErrors(new Set());
    }

    const remove = _ => {
        if (delClick) {
            setDeleteTypes(type);
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
            <div className="info">
                <input type="text" className={'title' + (errors.has('title') ? ' error' : '')} value={input.title} onChange={e => changeInput(e, 'title')} />
                <select className={'park' + (errors.has('park') ? ' error' : '')} value={input.park} onChange={e => changeInput(e, 'park')}>
                    <option key={0} value={0}>Unknown</option>
                    {
                        parks?.map(p => <option key={p.id} value={p.id}>{p.title}</option>)
                    }
                </select>
            </div>
            <div className="bottom">
            <div className="count">{typesCount.find(t => t.type === type.id)?.count || 0} trees of this type</div>
                <div className="buttons">
                    <button className="small blue" onClick={save}>save</button>
                    {
                        typesCount.find(t => t.type === type.id)?.count 
                        ? null 
                        : <button className={'small ' + (delClick ? 'yellow' : 'red')} onClick={remove}>remove</button>
                    }
                    <button className="small yellow" onClick={cancel}>cancel</button>
                </div>
            </div>
        </div>
    );

}