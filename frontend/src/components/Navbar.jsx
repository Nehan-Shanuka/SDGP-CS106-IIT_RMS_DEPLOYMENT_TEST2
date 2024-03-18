/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { FiMessageSquare, FiFolder } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { createElement } from "react";

const Navbar = ({ onSidebarOpen }) => {
  const menus = [
    { name: "My Timetable", link: "my-timetable", icon: MdOutlineDashboard },
    { name: "Group Timetables", link: "group-timetable", icon: FaPeopleGroup },
    {
      name: "Reservations",
      link: "reservations",
      icon: FiMessageSquare,
    },
    {
      name: "Planned Sessions",
      link: "planned-sessions",
      icon: TbReportAnalytics,
    },
    { name: "Group Formation", link: "student-grouping", icon: FiFolder },
    { name: "Group Details", link: "group-details", icon: TbListDetails },
    { name: "Review Requests", link: "review-requests", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    onSidebarOpen(open);
  }, [open, onSidebarOpen]);

  return (
    <div
      className={`bg-[#3E737A] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 h-screen`}
    >
      <div className="flex justify-between items-center bg-stone-200">
        <h2
          onClick={() => setOpen(!open)}
          style={{
            transitionDelay: `${1}00ms`,
          }}
          className={`whitespace-pre duration-300 text-2xl cursor-pointer ${
            !open && "opacity-0 -translate-x-28 overflow-hidden"
          }
                ${open && "opacity-100 translate-x-0  pl-5"}
               text-[#3E737A]`}
        >
          IIT RMS
        </h2>
        <div
          style={{
            transitionDelay: "1000ms",
            height: "10vh",
            alignItems: "center",
          }}
          className={`flex justify-between duration-500 text-[#3E737A] ${
            !open && "px-5 text-[#3E737A]"
          }  ${open && "px-5"}`}
        >
          <HiMenuAlt3
            size={27}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      <div className="relative flex flex-col gap-4 mt-4">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            onClick={() => setSelected(i)}
            className={` ${
              selected === i && "bg-stone-200"
            } group flex items-center text-sm  gap-3.5 px-[1.27rem] py-3 hover:bg-stone-200 mt-1`}
          >
            <div
              style={
                open
                  ? { transitionDelay: `${i}00ms` }
                  : {
                      transitionDelay: `0ms`,
                    }
              }
              className={`duration-300 group-hover:text-black
                  ${
                    !open &&
                    "drop-shadow-lg  py-1 w-fit group-hover:w-fit group-hover:duration-500"
                  }
                  ${selected === i && "text-black"}
                `}
            >
              {createElement(menu?.icon, { size: "25" })}
            </div>
            <h2
              style={{
                transitionDelay: `${i}00ms`,
              }}
              className={`whitespace-pre duration-300 text-[1.05rem] ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              } ${selected === i && "text-black"} group-hover:text-black`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-[#3E737A] font-semibold whitespace-pre text-stone-200 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-[4.5rem] group-hover:duration-300 group-hover:w-fit  `}
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
