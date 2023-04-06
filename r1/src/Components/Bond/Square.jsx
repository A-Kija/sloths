
export default function Square({data}) {

    return (
        <div className={'square egg ' + data.spin} style={{
            backgroundColor: data.color + '70',
            borderColor: data.color
            
        }}>
            <span>{data.number}</span>
        </div>
    );
}

