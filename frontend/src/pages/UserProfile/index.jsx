import React from 'react';
import {
 
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
    return (
      <section className="">
        <div className="container py-5 mt-[10%]">
          
  
          <div className="flex flex-col lg:flex-row ml-[10%]">
            <div className="lg:w-1/3 mb-4">
              <div className="bg-gray-300 rounded-lg mb-4 p-6 text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-full w-36 h-36 mx-auto mb-4 bg-gray-600"
                />
                <p className="text-gray-600 mb-1">Name of the student</p>
                <p className="text-gray-600 mb-4">Index No</p>
                <div className="flex justify-center mb-2">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">Level</button>
                  <button className="border bg-blue-500 text-white py-2 px-4 rounded ml-1">Course</button>
                </div>
              </div>
            </div>
  
            <div className="lg:w-2/3 mb-4 ml-5">
              <div className="bg-gray-300 rounded-lg p-6">
                <div className="mb-4">
                  <div className="flex">
                    <span className="w-1/4 text-gray-600">Full Name</span>
                    <span className="w-3/4 text-muted">Johnatan Smith</span>
                  </div>
                </div>
                <hr className="my-4" />
  
                <div className="mb-4">
                  <div className="flex">
                    <span className="w-1/4 text-gray-600">Email</span>
                    <span className="w-3/4 text-muted">example@example.com</span>
                  </div>
                </div>
                <hr className="my-4" />
                
  
                <div className="mb-4">
                  <div className="flex">
                    <span className="w-1/4 text-gray-600">Phone</span>
                    <span className="w-3/4 text-muted">(097) 234-5678</span>
                  </div>
                </div>
                <hr className="my-4" />
  
                <div className="mb-4">
                  <div className="flex">
                    <span className="w-1/4 text-gray-600">Mobile</span>
                    <span className="w-3/4 text-muted">(098) 765-4321</span>
                  </div>
                </div>
                <hr className="my-4" />
  
                <div className="mb-4">
                  <div className="flex">
                    <span className="w-1/4 text-gray-600">Address</span>
                    <span className="w-3/4 text-muted">Bay Area, San Francisco, CA</span>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }