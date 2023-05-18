import { useContext, useState } from 'react';
import { Data } from '../../Data';
import validateSubmit, { sanitizeInput } from '../../Validations/treesValidation';

export default function Create() {

    const { types, setCreateTrees, addMessage } = useContext(Data);

    const [errors, setErrors] = useState(new Set());

    const [input, setInput] = useState({
        title: '',
        height: '',
        type: 0
    });

    const changeInput = (e, prop) => {
        let value = e.target.value;
        value = sanitizeInput(value, prop);
        
        if (prop === 'height') {
            value = value.replace(/[^\d\.]/g, '');
        }
        setInput(i => ({...i, [prop]: value}));
    }

    const create = _ => {
        const data = {
            title: input.title,
            height: parseFloat(input.height),
            type: parseInt(input.type)
        };
        if (!validateSubmit(data, setErrors, addMessage)) {
            return;
        }
        setCreateTrees(data);
        setInput({
            title: '',
            height: '',
            type: 0
        });
        setErrors(new Set());
    }

    const remError = prop => {
        setErrors(e => {
            const copy = new Set([...e]);
            copy.delete(prop);
            return copy;
        });
    }

    return (
        <div className="card m-3">
            <h2 className="card-header color-yellow">Plant new tree</h2>
            <div className="card-body">
                <h5 className="card-title color-gray">Save the planet. Plant trees!</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Tree Title</label>
                                <input type="text" onFocus={_=> remError('title')} className={'form-control' + (errors.has('title') ? ' error' : '')} value={input.title} onChange={e => changeInput(e, 'title')} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label className="form-label">Tree Height</label>
                                <input type="text" onFocus={_=> remError('height')} className={'form-control' + (errors.has('height') ? ' error' : '')} value={input.height} onChange={e => changeInput(e, 'height')} />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="mb-3">
                                <label className="form-label">Tree Type</label>
                                <select onFocus={_=> remError('type')} className={'form-control' + (errors.has('type') ? ' error' : '')} value={input.type}  onChange={e => changeInput(e, 'type')}>
                                    <option key={0} value={0}>Select type</option>
                                    {
                                        types?.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="button" className="green" onClick={create}>plant!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}