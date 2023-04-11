export default function Sala({line}) {
    return (
        <>
        <h2>Sala</h2>
        <div style={{color:line.color}}>{line.name}</div>
        </>
    );
}