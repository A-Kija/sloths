import '../Style/create-color.scss';

export default function CreateColor({ color, title }) {

    const remove = _ => {

    }

    return (
        <div className="create-color" style={{
            backgroundColor: color
        }}>
            {title ? title : 'no title'}
            <div className="remove" onClick={remove}></div>
        </div>
    );

}