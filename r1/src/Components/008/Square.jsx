import randColor from '../../Functions/randColor';

export default function Square({data, setSquare}) {

    // DELETE
    const killIt = _ => {
        setSquare(s => s.filter(s => data.id !== s.id));
    }

    // EDIT
    const repaint = _ => {
        setSquare(s => s.map(s => data.id === s.id ? {...s, color: randColor()} : {...s}));
    }

    return (
        <div className="square big">
            <div style={{
                position: 'absolute',
                fontSize: '18px',
                top: '5px',
                left: '5px',
                color: 'whitesmoke'
            }}>{data.type}</div>
            <h2 style={{color: data.color, margin: '5px'}}>{data.name}</h2>
            <button className="red small" onClick={killIt}>kill</button>
            <button className="pink small" onClick={repaint}>rePaint</button>
        </div>
    );
}

