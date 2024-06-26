import React, { useState,useEffect } from 'react';
import { Button } from '@mui/material';
import axios from "axios";


function ProfilePage({userFromDB}) {
  const [usersData, setuserData] = useState([]);
  //  const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);


  console.log("newuser:",userFromDB);

  const userData = {
    name: 'Lionel Messi',
    indexNo: '101010',
    level: '100',
    course: 'Computer Science',
    email: 'example@example.com',
    phone: '(097) 234-5678',
    mobile: '(098) 765-4321',
    address: 'Bay Area, San Francisco, CA',
    profilePicture: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp',
  };

  

  return (
    <div>
      <div className="flex justify-end mt-[-30px]">
        
      <div className="flex justify-end pr-5 pt-5 space-x-2">
      {/* <Button variant="contained" color="info" style={{ marginRight: '8px' }}>
      Update Profile
      </Button> */}

      </div>
        
      </div>
      <section className="container py-5 mt-10">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop: 'auto'}}>
          <div className="w-full lg:w-1/4 bg-gray-300 rounded-lg p-8 text-center">
            <img src={userData.profilePicture} alt="avatar" className="rounded-full w-36 h-34 mx-auto mb-4" />
            { <p className="text-gray-600 mb-1">{userFromDB.name}</p> }
            <div className="flex justify-center gap-1">
              {/* <button className="bg-blue-500 text-white py-2 px-5 rounded">{userData.level}</button>
              <button className="bg-blue-500 text-white py-2 px-5 rounded">{userData.course}</button> */}
            </div>
          </div>


      <div  className="w-full  lg:w-2/3 bg-gray-300 rounded-lg p-7" style={{ flexDirection: 'column', alignItems: 'center',marginTop: 'auto'}}>
          <UserInfo label="Full Name : " value={userFromDB.name} />
          <UserInfo label="Email : " value={userFromDB.email} />
          <UserInfo label="Role : " value={userFromDB.role} />
      </div>


        </div>
        
        <div className=' ml-[46%] mt-[1%]'>

          <Button variant="contained" color="error" className=''>
            Logout
          </Button> 
      </div>
        
      </section>
    </div>
    
  );
}

function UserInfo({ label, value }) {
  return (
    <div className="mb-4">
      <div className="flex">
        <span className="w-1/3 text-gray-600">{label}</span>
        <span className="flex-1 text-muted">{value}</span>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default ProfilePage;