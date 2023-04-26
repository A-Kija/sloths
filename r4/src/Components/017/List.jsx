import { useContext } from "react";
import { Store } from "./Store";

export default function List() {

    const { list } = useContext(Store);

    if (null === list) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="nice-border list">
            {
                list.map(q => <div key={q.id} className="list">
                    <h6>{q.author}</h6>
                    <p>{q.quote}</p>
                </div>)
            }
        </div>
    )


}