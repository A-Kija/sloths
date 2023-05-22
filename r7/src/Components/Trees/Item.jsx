import { useContext, useEffect, useState } from 'react';
import { Data } from '../../Data';
import validateSubmit, { sanitizeInput } from '../../Validations/treesValidation';

export default function Item({ tree }) {

    const { types, setDeleteTrees, setEditTrees, addMessage } = useContext(Data);
    const [errors, setErrors] = useState(new Set());
    const [delClick, setDelClick] = useState(false);

    const [input, setInput] = useState({
        title: '',
        height: '',
        type: 0
    });

    useEffect(() => {
        setInput({
            title: tree.title,
            height: tree.height,
            type: tree.type
        });

    }, [tree]);

    const save = _ => {
        const data = {
            title: input.title,
            height: parseFloat(input.height),
            type: parseInt(input.type)
        };
        if (!validateSubmit(data, setErrors, addMessage)) {
            return;
        }
        setEditTrees({...data, id: tree.id});
    }

    const cancel = _ => {
        setInput({
            title: tree.title,
            height: tree.height,
            type: tree.type
        });
        setErrors(new Set());
    }

    const cut = _ => {
        if (delClick) {
            setDeleteTrees(tree);
        } else {
            setDelClick(true);
            setTimeout(() => setDelClick(false), 1000);
        }

    }

    const changeInput = (e, prop) => {
        let value = e.target.value;
        value = sanitizeInput(value, prop, input[prop]);
        setInput(i => ({ ...i, [prop]: value }));
    }

    return (
        <div className="list-item">
            <div className="info">
                <input type="text" className={'title' + (errors.has('title') ? ' error' : '')} value={input.title} onChange={e => changeInput(e, 'title')} />
                <input type="text"className={'height' + (errors.has('height') ? ' error' : '')} value={input.height} onChange={e => changeInput(e, 'height')} />
                <select className={'type' + (errors.has('type') ? ' error' : '')} value={input.type} onChange={e => changeInput(e, 'type')}>
                    <option key={0} value={0}>Unknown</option>
                    {
                        types?.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                    }
                </select>
            </div>
            <div className="buttons">
                <button className={'small ' + (delClick ? 'yellow' : 'red')} onClick={cut}>cut</button>
                <button className="small blue" onClick={save}>save</button>
                <button className="small yellow" onClick={cancel}>cancel</button>
            </div>
        </div>
    );

}