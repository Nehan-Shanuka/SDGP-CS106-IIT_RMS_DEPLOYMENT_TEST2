/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, IconButton } from "@mui/material";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export default function Topbar({ user }) {
  return (
    <Box maxHeight="10vh" display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      {/* <Box display="flex" bgcolor="#D9D9D9" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="submit" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box> */}

      <div><h1 className="text-xl">Hi {user.name}! WELCOME TO IIT RMS</h1></div>

      {/* User Icon */}
      <Box display="flex">
        <Link to="/data-upload">
          <IconButton>
            <FileUploadIcon />
          </IconButton>
        </Link>
        <Link to="/my-profile">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
