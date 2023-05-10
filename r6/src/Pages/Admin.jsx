import { useContext } from 'react'
import { Store } from '../Store'

export default function Admin() {

    const { adminPageData } = useContext(Store);

    if (null === adminPageData) {
        return (
            <h2>Loading...</h2>
        );
    }

    return (
        <>
            <h1>Admin</h1>

            {
                adminPageData.map(d => <div key={d.animal} style={{color:d.color, fontSize: '30px'}}>{d.animal}</div>)
            }

        </>

    )
}