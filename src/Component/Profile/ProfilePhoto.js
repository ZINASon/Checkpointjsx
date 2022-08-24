import React from 'react'
import logo  from './Zina-Sondes.jpg'

function ProfilePhoto() {
  return (
    <div>
        <h3>Here is My ProfilePhoto:</h3>
        <img src={logo} alt='Mylogo' height={200} width={200} style= {{Align: "center"}} />
    </div>
  )
}

export default ProfilePhoto