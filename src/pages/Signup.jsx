import React from 'react'
import Image from 'next/image';
import UserIdInput from '@/components/UserInput';
import PasswordInput from '@/components/PasswordInput';
import Link from 'next/link';

const Signup= ()=> {
  return (
    <div className="flex flex-wrap items-center justify-center h-screen">
        <div className="max-w-md p-8 bg-white">
          <div className="flex flex-col items-center justify-around h-full">
            <Image src="/flutter.png" width={150} height={150} />
            <h2 className="text-sky-400 text-5xl font-bold mb-2">Flutter School</h2>
            <div className='justify-around'>
            <h4 className="font-bold text-black-700 text-3xl">Welcome to flutter school!</h4>
            <p className="text-gray-500 mb-4 justify-around">The all in one ultimate app to help you to manage everything</p>
            </div>
          </div>   
          <UserIdInput/>
          <PasswordInput/>
          <PasswordInput/>
          <button type="submit" class="bg-blue-500 text-white rounded-md px-4 py-2 w-full text-lg">Sign Up</button>
          <p className="text-blue-400 text-right pt-4">
          Already have an account?{' '}
          <Link href="/Login" className="text-blue-500">Sign in</Link>
          
        </p>
        </div>
        <div className="mr-0">
          <Image src="/image.png" width={900} height={500} />
        </div>
      </div>
  )
}

export default Signup;
