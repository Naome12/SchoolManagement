import React from "react";
import Image from "next/image";
import { BiDockRight, BiHomeAlt2 } from "react-icons/bi";
import WeatherComponent from "./WeatherComponent";
import { GoPerson } from "react-icons/go";
import { SlGraduation } from "react-icons/sl";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { IoNotificationsOutline, IoSearch } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="flex">
      
      <div className="relative w-1/5 h-screen bg-white shadow-lg rounded-r-lg overflow-hidden">
        <div className="p-4">
          <div className="flex items-center mb-4 top-0 w-full">
            <Image src="/flutter.png" width={80} height={80} className="mt-0" />
            <h3 className="ml-2 text-xl font-bold text-sky-500">
              Flutter School
            </h3>
            <BiDockRight className="ml-auto text-sky-500" />
          </div>
          <div className="bg-gray-100 h-1 w-full mb-4"></div>
          <ul className="p-10">
            {[
              { icon: <BiHomeAlt2 />, text: "DashBoard" },
              { icon: <GoPerson />, text: "Students" },
              { icon: <SlGraduation />, text: "Classes" },
              { icon: <HiOutlineChatAlt2 />, text: "Chats" },
            ].map((item, index) => (
              <li key={index} className="flex items-center mb-7">
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-10 left-12 right-12 bg-sky-700 rounded-3xl h-24">
          <WeatherComponent />
        </div>
      </div>
      <nav className="p-4 flex items-center justify-between bg-white w-4/5 h-20">
        <div className="flex items-center">
          <div className="relative">
            <button className="px-4 py-2 rounded-lg focus:outline-none absolute left-0 top-0 bottom-0">
              <IoSearch className="text-gray-400 text-xl" />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 px-14 py-2 rounded-3xl mr-4 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative mr-4">
            <div className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 text-white flex items-center justify-center text-center">
              {" "} 3{" "}
            </div>
            <IoNotificationsOutline className="text-4xl" />
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
