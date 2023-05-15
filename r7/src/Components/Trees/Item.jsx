import { useContext, useState } from "react";
import { Data } from "../../Data";

export default function Item({ tree }) {

    const { treeTypes } = useContext(Data);

    const [input, setInput] = useState({
        title: '',
        height: '',
        type: 0
    });

    const changeInput = (e, prop) => {
        let value = e.target.value;
        if (prop === 'height') {
            value = value.replace(/[^\d\.]/g, '');
        }
        setInput(i => ({...i, [prop]: value}));
    }

    return (
        <div className="list-item">
            <input type="text" className="title" value={tree.title}  onChange={e => changeInput(e, 'title')} />
            <input type="text" className="height" value={tree.height}  onChange={e => changeInput(e, 'height')}/>
            <select value={tree.type} onChange={e => changeInput(e, 'type')}>
                {
                    treeTypes.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                }
            </select>
        </div>
    );

}