import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
  let {id} = useParams();
    return (
    <div>
      <h4>id : {id}</h4>
    </div>
  )
}

export default User