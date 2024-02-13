import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import DashboardIcon1 from "@mui/icons-material/Dashboard";
import DashboardIcon2 from "@mui/icons-material/Dashboard";
import ReservationIcon from "@mui/icons-material/EditCalendar";
import SessionScheduleIcon from "@mui/icons-material/EventNote";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import RequestReviewIcon from "@mui/icons-material/Today";
import DashboardIcon6 from "@mui/icons-material/Dashboard";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  hoveredItem,
  setHoveredItem,
}) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
      }}
    >
      <MenuItem
        active={selected === title}
        style={
          {
            // color: "#D9D9D9",
          }
        }
        onClick={() => setSelected(title)}
        icon={icon}
        onMouseEnter={() => setHoveredItem(title)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <Typography sx={{ color: hoveredItem === title ? "#000" : undefined }}>
          {title}
        </Typography>
      </MenuItem>
    </Link>
  );
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// const ItemList = [
//   {
//     title: "My Timetable",
//     to: "/my-timetable",
//     icon: <DashboardIcon1 />,
//     selected: {selected},
//     setSelected: {setSelected}
//   }
// ]

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <Box>
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor="#3E737A"
        style={{
          height: "100vh",
        }}
      >
        <Menu
          iconShape="square"
          rootStyles={
            {
              // color: "#D9D9D9",
            }
          }
          menuItemStyles={{
            // color: "#D9D9D9",
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: active || disabled ? "#000" : "#D9D9D9",
                  backgroundColor: active ? "#D9D9D9" : undefined,
                };
            },
          }}
        >
          {/* Logo & Menu Item */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            onMouseEnter={() => setHoveredItem("IIT RMS")}
            onMouseLeave={() => setHoveredItem(null)}
            icon={
              isCollapsed ? (
                <MenuOutlinedIcon
                  sx={{ color: hoveredItem === "IIT RMS" ? "#000" : "#D9D9D9" }}
                />
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: "#D9D9D9",
              hover: {
                color: "#000",
              },
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                onMouseEnter={() => setHoveredItem("IIT RMS")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: hoveredItem === "IIT RMS" ? "#000" : "#D9D9D9",
                    fontWeight: "bold",
                  }}
                >
                  IIT RMS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon
                    sx={{
                      color: hoveredItem === "IIT RMS" ? "#000" : "#D9D9D9",
                    }}
                  />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <motion.ul
              className="container"
              variants={container}
              initial="hidden"
              animate="visible"
              style={{ listStyle: "none", paddingInlineStart: "0" }}
            >
              <motion.li variants={item}>
                <Item
                  title="My Timetable"
                  to="/my-timetable"
                  icon={
                    <DashboardIcon1
                      sx={{
                        color:
                          hoveredItem === "My Timetable" ||
                          selected === "My Timetable"
                            ? "Black"
                            : "#D9D9D9",

                        // color: selected === "My Timetable" ? "Black" : "#D9D9D9",
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}

                  // onMouseEnter={() => setHoveredItem(1)}
                  // onMouseLeave={() => setHoveredItem(null)}
                />
              </motion.li>

              <motion.li variants={item}>
                <Item
                  title="Group Timetables"
                  to="/group-timetables"
                  icon={
                    <DashboardIcon2
                      sx={{
                        color:
                          hoveredItem === "Group Timetables" ||
                          selected === "Group Timetables"
                            ? "Black"
                            : "#D9D9D9",
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              </motion.li>

              <motion.li variants={item}>
                <Item
                  title="Reservations"
                  to="/reservations"
                  icon={
                    <ReservationIcon
                      sx={{
                        color:
                          hoveredItem === "Reservations" ||
                          selected === "Reservations"
                            ? "Black"
                            : "#D9D9D9",
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              </motion.li>
              <motion.li variants={item}>
                <Item
                  title="Planned Sessions"
                  to="/planned-sessions"
                  icon={
                    <SessionScheduleIcon
                      sx={{
                        color:
                          hoveredItem === "Planned Sessions" ||
                          selected === "Planned Sessions"
                            ? "Black"
                            : "#D9D9D9",
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              </motion.li>
              <motion.li variants={item}>
                <Item
                  title="Student Grouping"
                  to="/student-grouping"
                  icon={
                    <GroupAddIcon
                      sx={{
                        color:
                          hoveredItem === "Student Grouping" ||
                          selected === "Student Grouping"
                            ? "Black"
                            : "#D9D9D9",
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              </motion.li>
              <motion.li variants={item}>
                <Item
                  title="Group Details"
                  to="/group-details"
                  icon={
                    <DashboardIcon6
                      sx={{
                        color:
                          hoveredItem === "Group Details" ||
                          selected === "Group Details"
                            ? "Black"
                            : "#D9D9D9",
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              </motion.li>
              <motion.li variants={item}>
                <Item
                  title="Review Requests"
                  to="/review-requests"
                  icon={
                    <RequestReviewIcon
                      sx={{
                        color:
                          hoveredItem === "Review Requests" ||
                          selected === "Review Requests"
                            ? "Black"
                            : "#D9D9D9",
                      }}
                    />
                  }
                  selected={selected}
                  setSelected={setSelected}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              </motion.li>
            </motion.ul>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
