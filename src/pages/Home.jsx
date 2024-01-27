import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "MyTimetable", link: "/", icon: MdOutlineDashboard },
    { name: "Group Timetables", link: "/", icon: FaPeopleGroup },
    { name: "Reservation Requests", link: "/", icon: FiMessageSquare },
    { name: "Planned Sessions", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "Group Formation", link: "/", icon: FiFolder },
    { name: "Group Details", link: "/", icon: TbListDetails },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Review Requests", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 bg-gray-200">
      <div
        className={`bg-[#138d64] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="flex justify-end py-3">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="relative flex flex-col gap-4 mt-4">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-green-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="justify-center m-3 text-xl font-semibold text-gray-900">
      <h1 className='p-5  bg-green-600 rounded-[100px] text-center'>WELCOME</h1>
      </div>

      <div>
        <div className="flex justify-center m-3 text-xl font-semibold text-gray-900">
          <button className="p-5 bg-white rounded-lg">My Timetable</button>
        </div>
        <div className="flex justify-center m-3 text-xl font-semibold text-gray-900">
          <button className="p-5 bg-white rounded-lg">Group Timetables</button>
        </div>
        <div className="flex justify-center m-3 text-xl font-semibold text-gray-900">
          <button className="p-5 bg-white rounded-lg">Reservation Requests</button>
        </div>
        <div className="flex justify-center m-3 text-xl font-semibold text-gray-900">
          <button className="p-5 bg-white rounded-lg">Planned Sessions</button>
        </div>
        <div className="flex justify-center m-3 text-xl font-semibold text-gray-900">
          <button className="p-5 bg-white rounded-lg">Group Formation</button>
        </div>
        <div className="flex justify-center m-3 text-xl font-semibold text-gray-900">
          <button className="p-5 bg-white rounded-lg">Group Details</button>
        </div>
        <div className="flex justify-center m-3 text-xl font-semibold text-gray-900">
          <button className="p-5 bg-white rounded-lg">Review Requests</button>
        </div>
       
      </div>
    </section>
  );
};

export default Home;
