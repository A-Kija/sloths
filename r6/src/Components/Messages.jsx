import { useContext } from 'react';
import { Store } from '../Store';

export default function Messages() {

    const { messages } = useContext(Store);

    if (!messages.length) {
        return null;
    }

    return (
        <div className="msg-bin">
            {
                messages.map(m => <div key={m.id} className={'msg ' + m.type}>{m.text}</div>)
            }
        </div>
    );

}