import { useEffect, useState } from 'react';
import useFile from '../useFile';
import '../buttons.scss';
import axios from 'axios';

export default function Edit({ setLastUpdate, modal, setModal }) {

    const [title, setTitle] = useState('');
    const [remove, setRemove] = useState(false);
    const [url, setUrl] = useState('');
    const [file, readFile, removeFile, setFile] = useFile();

    useEffect(() => {
        if (null === modal) {
            return;
        }
        setTitle(modal.title);
        setUrl(modal.url);


    }, [modal]);

    const clickRemove = _ => {
        setUrl('')
        setRemove(true);
        removeFile();
    }

    const makeReadFile = e => {
        setUrl('')
        setRemove(false);
        readFile(e);
    }

    const close = _ => {
        setModal(null);
        setUrl('');
        removeFile();
    }

    const undo = _ => {
        setUrl(modal.url);
        removeFile();
    }

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
                            <input type="file" className="custom-file-input" onChange={makeReadFile}></input>
                        </div>
                    </div>
                    <div className="img">
                        {
                            url ? <img src={'http://localhost:3003/img/' + modal.url}></img> : null
                        }
                        {
                            file ? <img src={file}></img> : null
                        }
                        {
                            !url && !file ? <img src="./no.png"></img> : null
                        }

                        {
                            url || file ? <div className="remove" onClick={clickRemove}></div> : null
                        }
                        {
                            !url && modal.url ? <div className="undo" onClick={undo}></div> : null
                        }
                    </div>
                    <button className="blue" onClick={save}>save</button>
                </div>
                <div className="close-button" onClick={close}></div>
            </div>
        </div>
    );
}