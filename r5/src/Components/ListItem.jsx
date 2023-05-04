import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default function ListItem({ color }) {

    return (
        <div className="item">
            <div className="header">
                <h2>{color.title}</h2>
                <DeleteButton colorId={color.id} />
                <EditButton color={color} />
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