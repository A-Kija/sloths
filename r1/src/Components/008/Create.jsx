import rand from '../../Functions/rand';
import { v4 as uuidv4 } from 'uuid';

export default function Create({ sq, setSquare }) {

    const create = _ => {
        const creation = {
            id: uuidv4(),
            type: sq[rand(0, sq.length - 1)].type,
            name: sq[rand(0, sq.length - 1)].name,
            color: sq[rand(0, sq.length - 1)].color,
        }
        // CREATE
        setSquare(s => [...s, creation]);
    }



    return (
        <>
            <h2>CREATE NEW</h2>
            <button className="green" onClick={create}>Create new</button>
        </>
    );
}