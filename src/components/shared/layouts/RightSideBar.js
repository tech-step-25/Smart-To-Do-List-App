import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Badge from "@mui/material/Badge";
import {
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import sidebar from "../../../assets/sidebar.png";

export default function RightSideBar() {
  //Calendar
  const [currentDate, setCurrentDate] = React.useState(dayjs("2025-06-29"));
  const handleChange = (newDate) => {
    setCurrentDate(newDate);
  };

  //Notifications
  const [badge, setBadge] = React.useState(4);
  const [options, setOptions] = React.useState([
    "Buy domain",
    "Submit portfolio",
  ]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOptions(["No notifications found"]);
    setBadge(0);
  };

  return (
    <Box component="aside">
      {/*profile*/}
      <Box>
        <Box>
          <Box>
            <IconButton onClick={handleClick}>
              <Badge badgeContent={badge} color="primary">
                <CircleNotificationsIcon />
              </Badge>
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {options.map((option) => (
                <MenuItem onClick={handleClose}>{option}</MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h3" component="h3">
            Hi, Bashaer
          </Typography>
          <AccountCircleIcon />
        </Box>
        <Divider />
        <Box component="img" src={sidebar} alt="" />
        <Typography variant="h2" component="h2">
          We break your goals into small, achievable tasks
        </Typography>
        <Typography variant="body1" component="p">
          Simple steps. Real progress.
        </Typography>
        <Button variant="contained">Show tasks</Button>
      </Box>

      {/*calendar*/}
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateCalendar", "DateCalendar"]}>
            <DemoItem>
              <DateCalendar
                value={currentDate}
                onChange={handleChange}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </Box>
  );
}
