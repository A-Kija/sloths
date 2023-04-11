
export default function Square({data}) {

    return (
        <div className="square big">
            <h2 style={{color: data.color}}>{data.name}</h2>
        </div>
    );
}

