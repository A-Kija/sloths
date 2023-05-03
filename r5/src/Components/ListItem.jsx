import DeleteButton from "./DeleteButton";

export default function ListItem({ color }) {

    return (
        <div className="item">
            <div className="header">
                <h2>{color.title}</h2>
                <DeleteButton colorId={color.id} />
            </div>
            <div className="colors">
                {
                    color.colors.map(c =>
                        <div className="color" key={c.id} style={{
                            backgroundColor: c.color
                        }}>
                            {c.title}
                        </div>)
                }
            </div>
        </div>
    );
}