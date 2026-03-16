import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData,SetUserData] = useState({
    name:"nobita nobi",
    image: assets.profile_pic,
    email:"nobita@gmail.com",
    phone:"+91 9092983837",
    address:{
      line1:'address which ',
      line2:" your address "
    },
    gender:"Male",
    dob:"16 une 2004"

  })

  const [isEdit,SetIsEdit]=useState(false)

  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit
        ?<input type="text"  value={userData.name} onChange={e=>SetUserData(prev=>({...prev,name:e.target.value}))}/>
        : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>Contact Information</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
        isEdit
        ?<input type="text"  value={userData.phone} onChange={e=>SetUserData(prev=>({...prev,phone:e.target.value}))}/>
        : <p>{userData.phone}</p>
      }
      <p>Address:</p>
      {
        isEdit
       ? <p>
          <input onChange={(e)=>SetUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} value={userData.address.line1} type="text" />
          <br />
          <input onChange={(e)=>SetUserData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} value={userData.address.line2} type="text" />
        </p>
      : <p>
        {
          userData.address.line1
        }
        <br />
        {
          userData.address.line2
        }
      </p>
      }
        </div>
      </div>

      <div>
        <p>Basic Information</p>
        <div>
          <p>Gender</p>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
