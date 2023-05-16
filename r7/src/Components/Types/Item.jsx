import { useContext, useEffect, useRef, useState } from "react";
import { Data } from "../../Data";

export default function Item({ tree }) {

    const { treeTypes, setDeleteTrees, setEditTrees } = useContext(Data);
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
        setEditTrees({
            title: input.title,
            height: parseFloat(input.height),
            type: parseInt(input.type),
            id: tree.id
        });
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
        if (prop === 'height') {
            value = value.replace(/[^\d\.]/g, '');
        }
        setInput(i => ({ ...i, [prop]: value }));
    }

    return (
        <div className="list-item">
            <div className="info">
                <input type="text" className="title" value={input.title} onChange={e => changeInput(e, 'title')} />
            </div>
            <div className="buttons">
                <button className={'small ' + (delClick ? 'yellow' : 'red')} onClick={cut}>cut</button>
                <button className="small blue" onClick={save}>save</button>
            </div>
        </div>
    );

}