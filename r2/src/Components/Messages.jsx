export default function Messages({ messages }) {

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