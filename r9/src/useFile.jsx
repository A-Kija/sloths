import { useRef, useState } from 'react';


export default function useFile() {


    const [file, setFile] = useState(null);
    const uploadInput = useRef(null);


    const fileReader = file => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = _ => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const readFile = e => {
        uploadInput.current = e.target;
        fileReader(e.target.files[0])
        .then(f => setFile(f))
        .catch(_ => _);
    }

    const removeFile = _ => {
        if (null !== uploadInput.current) {
            uploadInput.current.value = null;
        }
        setFile(null);
    }



    return [file, readFile, removeFile, setFile];

}