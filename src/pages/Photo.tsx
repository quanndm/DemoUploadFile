
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Photo = () => {
   const {fileName} =  useParams()
   const [imgUrl, setImgUrl] = useState("")
   const navigate = useNavigate();
   useEffect(() => {
    if (fileName !== null) {
        setImgUrl(`${process.env.REACT_APP_URL_API}/api/File/get?FileName=${fileName}`)
    }
   }, [fileName])
   
  return (
    <div className='container'>
        <h2 className='text-center'>Detail Photo</h2>
        <div className="row">
            <div className="col-4">
            {!imgUrl?  <>loading....</>  : (
                <img src={imgUrl} alt={fileName} style={{width: "100%"}}/>
            )}
            </div>
            <div className="col-8">
                <p><strong>File name</strong> : {fileName}</p>
                <br />
                <button className='btn btn-primary' onClick={()=>navigate("/")}>Back to Home</button>
            </div> 
        </div>
        
    </div>
  )
}

export default Photo