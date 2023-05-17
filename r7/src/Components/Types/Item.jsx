import { useContext, useEffect, useState } from "react";
import { Data } from "../../Data";

export default function Item({ type }) {

    const { setDeleteTypes, setEditTypes, typesCount } = useContext(Data);
    const [delClick, setDelClick] = useState(false);

    const [input, setInput] = useState({
        title: '',
        height: '',
        type: 0
    });

    useEffect(() => {
        setInput({
            title: type.title,
        });
    }, [type]);

    const save = _ => {
        setEditTypes({
            title: input.title,
            id: type.id
        });
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
        setInput(i => ({ ...i, [prop]: value }));
    }

    return (
        <div className="list-item">
            <div className="info">
                <input type="text" className="title" value={input.title} onChange={e => changeInput(e, 'title')} />
            </div>
            <div className="bottom">
            <div className="count">{typesCount.find(t => t.type === type.id)?.count || 0}</div>
                <div className="buttons">
                    {
                        typesCount.find(t => t.type === type.id)?.count 
                        ? null 
                        : <button className={'small ' + (delClick ? 'yellow' : 'red')} onClick={remove}>remove</button>
                    }
                    <button className="small blue" onClick={save}>save</button>
                </div>
            </div>
        </div>
    );

}