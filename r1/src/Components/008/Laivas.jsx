export default function Laivas({line}) {
    return (
        <>
        <h2>LAIVAS</h2>
        <div style={{color:line.color}}>{line.name}</div>
        </>
    );
}