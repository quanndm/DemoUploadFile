import React from 'react'
import ListPhoto from '../Components/ListPhoto'

const Index = () => {
  return (
    <div className='container'>
        <h1 className='text-center'>List of photo</h1>
        <div className="row">
            <div className="col-12">
                <ListPhoto />
            </div>
        </div>
    </div>
  )
}

export default Index