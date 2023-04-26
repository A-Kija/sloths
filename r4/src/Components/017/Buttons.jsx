import { useContext } from "react"
import { Store } from "./Store"

export default function Buttons() {


    const { doCounter1, doCounter3 } = useContext(Store);

    return (
        <div className="nice-border">

            <button className="green" onClick={doCounter1}>+1</button>
            <button className="pink" onClick={doCounter3}>X3</button>

        </div>
    )

}