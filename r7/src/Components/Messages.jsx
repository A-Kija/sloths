import { useContext } from "react";
import { Data } from "../Data";

export default function Messages() {

    const { msg, removeMessage } = useContext(Data);

    return (
        <div className="toast-container">
            {
                msg.map(m =>
                    <div key={m.id} className="toast show">
                        <div className="toast-header">
                            <div className={'type ' + m.type}></div>
                            <strong className="me-auto">{m.title}</strong>
                            <small className="text-muted">{m.seconds < 2 ? 'just now' : m.seconds + ' seconds'}</small>
                            <button type="button" className="btn btn-close" onClick={_=> removeMessage(m.id)}></button>
                        </div>
                        <div className="toast-body">
                            {m.text}
                        </div>
                    </div>)
            }
        </div>
    );
}