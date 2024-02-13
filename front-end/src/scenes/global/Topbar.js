import { Box, IconButton } from "@mui/material";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <Box display="flex" justifyContent="space-between" p={2} maxHeight="4vh">
      {/* Search Bar */}
      <Box display="flex" bgcolor="#D9D9D9" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="submit" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* User Icon */}
      <Box display="flex">
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
