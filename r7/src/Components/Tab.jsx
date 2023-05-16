import { useContext } from "react";
import { Data } from "../Data";

export default function Tab(props) {

    const {tab, setTab} = useContext(Data);

    if(!props.show) {
        return null;
    }

    return (
        <div className="card m-3">
            <h2 className="card-header color-yellow">
                <header>
                <span>{props.title}</span>
                <div className="tabs">
                    <div className={'tab' + ('trees' === tab ? ' active' : '')} onClick={_=> setTab('trees')}>trees</div>
                    <div className={'tab' + ('types' === tab ? ' active' : '')} onClick={_=> setTab('types')}>types</div>
                </div>
                </header>
            </h2>
            {props.children}
        </div>
    )
}