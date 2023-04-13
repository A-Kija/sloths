import rand from '../../Functions/rand';
import './farm.scss';
import Gyvulys from './Gyvulys';
import { useEffect, useState } from 'react';
function Ganykla() {

    const [animals, setAnimals] = useState(null);

    const spring = _ => {
        const all = [];
        ['avis', 'karvė'].forEach((type, index) => {
            const count = rand(2, 7);
            for (let i = 0; i < count; i++) {
                let id = ('' + rand(0, 9999999)).padStart(7, '0');
                id = type === 'avis' ? 'A' + id : 'K' + id;
                all.push({ id, type, number: index });
            }
        });
        setAnimals(all);
    }

    useEffect(() => {
        if (null !== localStorage.getItem('farm')) {
            setAnimals(JSON.parse(localStorage.getItem('farm')))
        } else {
            setAnimals([]);
        }
    }, []);

    useEffect(() => {
        if (null === animals) {
            return;
        }
        localStorage.setItem('farm', JSON.stringify(animals));
    }, [animals]);


    if (null === animals) {
        return null;
    }

    return (
        <>
            <div className="ganykla">
                <div className="dalis">
                    <h2>Avys</h2>
                    <div className="tvora">
                        {
                            animals.map(a => a.number === 0 ? <Gyvulys key={a.id} apie={a} setAnimals={setAnimals} /> : null)
                        }
                    </div>
                </div>
                <div className="dalis">
                    <h2>Karvės</h2>
                    <div className="tvora">
                        {
                            animals.map(a => a.number === 1 ? <Gyvulys key={a.id} apie={a} setAnimals={setAnimals}/> : null)
                        }
                    </div>
                </div>
            </div>
            <button className="yellow" onClick={spring}>į ganyklą</button>
        </>
    );

}

export default Ganykla;