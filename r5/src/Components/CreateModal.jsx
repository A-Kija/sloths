import { useContext, useEffect, useState } from 'react';
import '../Style/create-modal.scss';
import CreateColor from './CreateColor';
import { Store } from '../Store';
import variables from '../Style/variables.module.scss';

export default function CreateModal() {

    const { showHideCreateModal, hideCreate, colors, addColor, addTitle, doCreate } = useContext(Store);

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#000000');
    const [opacity, setOpacity] = useState(0);
    const [show, setShow] = useState(null);

    const done = _ => {
        doCreate();
        setTitle('');
        setColor('#000000');
    }

    useEffect(() => {
        addTitle(title);
    }, [title, addTitle]);

    const add = _ => {
        addColor(color);
        setColor('#000000');
    }

    useEffect(() => {
        // if (null === show) {
        //     setShow(false);
        //     return;
        // }

        if (showHideCreateModal === true) {
            setShow(true);
            setTimeout(_ => setOpacity(1), 50); // fake wait while css apply
        } else {
            setOpacity(0);
            setTimeout(_ => setShow(false), parseInt(variables.animationTime));
        }

    }, [showHideCreateModal]);

    if (!show) {
        return null;
    }


    return (
        <div className="create-modal" style={{opacity}}>
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
                            : colors.map(c => <CreateColor key={c.id} id={c.id} color={c.color} title={c.title}  parent="create"/>)
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