
function Gyvulys({apie, setAnimals}) {

    const run = _ => {
        setAnimals(a => a.map(a => a.id === apie.id ? {...a, number: a.number === 0 ? 1 : 0} : {...a}))
    }

    return (
        <div className="gyvulys" style={{
            borderRadius: apie.type === 'avis' ? '50%' : null
        }} onClick={run}>
            {apie.id}
        </div>
    );

}

export default Gyvulys;