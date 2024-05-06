"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import PasswordInput from '@/components/PasswordInput';
import ReactModal from 'react-modal';
import Link from 'next/link';
import { FaLock } from "react-icons/fa6";
import UserIdInput from '@/components/UserInput';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen">
      <div className="max-w-md p-8 bg-white">
        <div className="flex flex-col items-center justify-around h-full">
          <Image src="/flutter.png" width={150} height={150} />
          <h2 className="text-sky-400 text-5xl font-bold mb-2">Flutter School</h2>
          <h4 className="font-bold text-black-700 text-3xl">Welcome Back!</h4>
          <p className="text-gray-500 mb-4">The all in one ultimate app to help you manage everything</p>
        </div>   
        <UserIdInput/>
        <PasswordInput />
        <div>
          <p className="mt-2 text-sm font-semibold text-sky-500 text-right pb-6 pt-0 cursor-pointer" onClick={() => setIsOpen(true)}> Forgot Password</p>
          <ReactModal 
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className="flex justify-center items-center"
          overlayClassName="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center border border-none"
        >
          <div className="bg-white rounded-lg pl-10 pr-10 pt-20 pb-20 border border-white">
            <div className="flex flex-col items-center mb-4">
              <FaLock className="text-sky-500 text-4xl mb-2" />
              <h2 className="text-xl font-bold text-sky-500">Forgot Password</h2>
            </div>
            <div className="flex flex-col items-center mb-4">
              <div className="rounded-full overflow-hidden w-24 h-24 mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
              <p className="text-center">Alice</p>
            </div>
            <input type="email" name="email" required={true} placeholder="Registered Email" className="border rounded-md px-4 py-2 mb-4 w-full max-w-md" />
            <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 mb-4 w-full max-w-md">Send Request</button>
            <p className="text-blue-500 cursor-pointer text-center" onClick={() => setIsOpen(false)}>Back to login page</p>
          </div>
        </ReactModal>
        
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 w-full text-lg">Login</button>
        <p className="text-sky-500 pt-4 text-right">
          Don't have an account?{' '}
          <Link href="/Signup" className="text-blue-500">Sign up</Link>
        
        </p>
      </div>
      <div className="mr-4">
        <Image src="/image.png" width={900} height={500} />
      </div>
    </div>
  );
}

export default Login;
