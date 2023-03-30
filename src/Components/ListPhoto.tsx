import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ListPhoto = () => {
    let isLoadFirst = useRef(true)
    const [listImage, setListImage] = useState([] as any[])
    const navigate = useNavigate();
    const fetchListImage = async ()=>{
        const res = await axios.get("/api/File/getall");
        const data = res.data as any[];
        setListImage(data)
    }
    const deleteImage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        let check = window.confirm("Do you want to delete this image??")
        if (check) {
            //handle delete
            const tmp = e.currentTarget.parentNode!.parentElement!;
            const fileName = tmp.getElementsByClassName("filename")[0].textContent;
            if (fileName !== null) {
                const res = await axios.delete(`/api/File/delete?FileName=${fileName}`)
                if (res.status === 200) {
                    window.location.reload();
                }
                else{
                    alert("An error occured");
                }
            }
        }else return;
    }
    useEffect(() => {
        if(isLoadFirst.current){
            isLoadFirst.current = false;
            fetchListImage()
        }
    }, [])
    
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Img</th>
                        <th scope="col">Name</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                    {
                        listImage && listImage.map((e, index)=>(
                            <tr key={index }>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img src={e.uri} style={{width: "100px"}} alt="image_dump"/>
                                </td>
                                <td className="filename">{e.name}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=>navigate(`/photo/${e.name}`)}>go to detail</button>
                                    <button className='btn btn-danger'  onClick={e=>deleteImage(e)}>Delete</button>
                                </td> 
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListPhoto