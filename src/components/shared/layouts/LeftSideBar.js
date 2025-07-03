import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function LeftSideBar() {
  return (
    <Box component="aside">
      {/* Logo */}
      <Box>
        <Link to="/">
          <Typography variant="h1" component="h1">
            goal
            <Typography variant="h1" component="span">
              ify
            </Typography>
          </Typography>
        </Link>
      </Box>

      {/*Navigation Links*/}
      <List>
        <ListItem button component={Link} to="/goals">
          <ListItemIcon>
            <ChecklistIcon />
          </ListItemIcon>
          <ListItemText primary="goals" />
        </ListItem>
        <ListItem button component={Link} to="/tasks">
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="tasks" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon>
            <ManageAccountsIcon />
          </ListItemIcon>
          <ListItemText primary="settings" />
        </ListItem>
      </List>
    </Box>
  );
}
