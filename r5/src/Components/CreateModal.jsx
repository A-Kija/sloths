import { useContext, useEffect, useState } from 'react';
import '../Style/create-modal.scss';
import CreateColor from './CreateColor';
import { Store } from '../Store';

export default function CreateModal() {

    const { showHideCreateModal, hideCreate, colors, addColor, addTitle, doCreate } = useContext(Store);

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#000000');

    const done = _ => {
        doCreate();
    }

    useEffect(() => {
        addTitle(title);
    }, [title, addTitle]);

    const add = _ => {
        addColor(color);
        setColor('#000000');
    }

    if (!showHideCreateModal) {
        return null;
    }


    return (
        <div className="create-modal">
            <div className="create-modal-body">
                <div className="create-modal-title">
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="create-modal-colors-bin">
                    <div className="create-modal-color-picker">
                        <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                        <button onClick={add}>add</button>
                    </div>
                    <div className="create-modal-colors">
                        {
                            colors === null 
                            ? <h3>No colors</h3>
                            : colors.map(c => <CreateColor key={c.id} id={c.id} color={c.color} title={c.title} />)
                        }
                    </div>
                </div>
                <div className="create-modal-bottom">
                    <button onClick={done}>done</button>
                    <button onClick={hideCreate}>cancel</button>
                </div>
            </div>
        </div>
    );

}