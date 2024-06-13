import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    const {email} = useParams();
  return (
    <div>
      <h1>Xin chao {email}</h1>

    </div>
  )
}

export default Hello
