import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaPeopleGroup } from 'react-icons/fa6';
import { RiSettings4Line } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';
import { FiMessageSquare, FiFolder } from 'react-icons/fi';
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';

const Navbar = () => {
  const menus = [
    { name: 'MyTimetable', link: 'my-timetable', icon: MdOutlineDashboard },
    { name: 'Group Timetables', link: 'group-timetable', icon: FaPeopleGroup },
    { name: 'Reservation Requests', link: 'reservations', icon: FiMessageSquare },
    { name: 'Planned Sessions', link: 'planned-sessions', icon: TbReportAnalytics, margin: true },
    { name: 'Group Formation', link: 'student-grouping', icon: FiFolder },
    { name: 'Group Details', link: 'group-details', icon: TbListDetails },
    { name: 'Review Requests', link: 'review-requests', icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);

  return (
    
      <div
        className={`bg-[#22765a] min-h-screen ${
          open ? 'w-72' : 'w-16'
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
              className={`${
                menu?.margin && 'mt-5'
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-green-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: '20' })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && 'hidden'
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      
      
   
  );
};

export default Navbar;
