import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormUpload = () => {
    const [file, setFile] = useState({} as File);
    const navigate = useNavigate();
    const handleChageFile = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const fileList = e.currentTarget.files
        if(fileList === null) return;
        const image = fileList[0]
        setFile(image);
    }
    const handleUpload = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            const formFile = new FormData();
            formFile.append("ImageFile", file);
            const res = await axios.post("/api/File/upload", formFile)
            if (res.status === 200) {
                setFile({} as File)
                navigate("/")
                return;
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='container'>
            <h2 className='text-center'>Upload image to cloud</h2>
            <form encType='multipart/form-data' onSubmit={e=>handleUpload(e)}>
                <div className="mb-3">
                    <label htmlFor="formFile" className='mb-4 fw-bold'>Image</label>
                    <input className="form-control" type="file" id="formFile" onChange={e=>handleChageFile(e)} />
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default FormUpload