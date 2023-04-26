import { useContext } from "react"
import { Store } from "./Store"

export default function View() {

    const { counter1, counter3, color1 } = useContext(Store);

    return (
        <div className="nice-border">
            <h2 style={{color: color1 === 'error' ? 'crimson' : null}}>{counter1}</h2>
            <h2>{counter3}</h2>
        </div>
    )

}