import { useEffect, useState } from 'react';
import useFile from '../useFile';
import '../buttons.scss';
import axios from 'axios';

export default function Edit({ setLastUpdate, modal, setModal }) {

    const [title, setTitle] = useState('');
    const [file, readFile, removeFile, setFile] = useFile();

    useEffect(() => {
        if (null === modal) {
            return;
        }
        setTitle(modal.title);
        setFile(modal.file);
    }, [modal])

    const save = _ => {
        axios.put('http://localhost:3003/images/' + modal.id, { file, title })
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            })
            .catch(error => {
                console.log(error);
            });
        setModal(null)
    }

    if (null === modal) {
        return null;
    }

    return (
        <div className="modal">
            <div className="bin">
                <div className="box">
                    <h2>Edit Image</h2>
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder="image text" value={title} onChange={e => setTitle(e.target.value)}></input>
                        </div>
                        <div className="input">
                            <input type="file" className="custom-file-input" onChange={readFile}></input>
                        </div>
                    </div>
                    <div className="img">
                        {
                            file ? <img src={file}></img> : <img src="./no.png"></img>
                        }
                        {
                            file ? <div className="remove" onClick={removeFile}></div> : null
                        }
                    </div>
                    <button className="blue" onClick={save}>save</button>
                </div>
                <div className="close-button" onClick={_ => setModal(null)}></div>
            </div>
        </div>
    );
}