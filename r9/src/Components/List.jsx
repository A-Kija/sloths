import axios from 'axios';
import { useEffect, useState } from 'react';

export default function List({ lastUpdate, setLastUpdate, setModal }) {

    const [images, setImages] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/images')
            .then(res => setImages(res.data.result.sort((a, b) => b.id - a.id)))
            .catch(error => console.log(error))
    }, [lastUpdate]);

    const remove = id => {
        axios.delete('http://localhost:3003/images/' + id)
        .then(res => {
            console.log(res.data);
            setLastUpdate(Date.now());
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="box">
            <h2>Images List</h2>
            {
                !images ? null :
                    images.map(i =>
                        <div className="image-bin" key={i.id}>
                            {
                                i.url
                                ? <img src={'http://localhost:3003/img/' +  i.url}></img>
                                : <div className="no-image">No Image</div>
                            }
                            
                            <div className="title">{i.title}</div>
                            <div className="tool-bar">
                                <span className="edit" onClick={_ => setModal(i)}></span>
                                <span className="remove" onClick={_ => remove(i.id)}></span>
                            </div>
                        </div>
                    )
            }





        </div>
    );
}