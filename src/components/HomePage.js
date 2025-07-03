import React from "react";
import Header from "./shared/layouts/Header";
import { BarChart } from "@mui/x-charts/BarChart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  Divider,
  LinearProgress
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

export default function HomePage() {
  //goals
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/*header*/}
      <Header
        type="homepage"
        heading="Goal Tracker"
        content="Every big goal starts with one small task."
        btnText="Get Started"
      />

      <Box component="main">
        {/*goals*/}
        <Box>
          <Card>
            <CardContent>
              <Box>
                <Typography variant="h3" component="h3">
                  Learn React
                </Typography>
                <IconButton onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  {["edit","delete"].map((option) => (
                    <MenuItem
                      key={option}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography variant="subtitle1" component="h4">
                studying
              </Typography>
              <Box>
                <LinearProgress variant="determinate" value={30} />
                <Box>
                  <Typography variant="body2" component="p">
                    progress
                  </Typography>
                  <Typography variant="body2" component="p">
                    30%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained">show</Button>
              <Typography variant="body2" component="p">
                3 days left
              </Typography>
            </CardActions>
          </Card>
        </Box>
        {/*chart*/}
        <Box>
          <BarChart
            xAxis={[
              {
                data: [
                  "Completed Goals",
                  "Active Goals",
                  "Completed Tasks",
                  "Remaining Tasks",
                ],
              },
            ]}
            series={[{ data: [2, 1, 4, 6] }]}
          />
        </Box>

        {/*upcoming tasks*/}
        <Box>
          <Typography variant="h3" component="h3">
            upcoming tasks
          </Typography>
          <Box>
            <Box>
              <Typography variant="h4" component="h4">
                submit portfolio
              </Typography>
              <Typography variant="body1" component="p">
                in 2 days
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" component="h4">
                submit portfolio
              </Typography>
              <Typography variant="body1" component="p">
                in 2 days
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" component="h4">
                submit portfolio
              </Typography>
              <Typography variant="body1" component="p">
                in 2 days
              </Typography>
            </Box>
          </Box>
          <Button variant="contained">See all</Button>
        </Box>
      </Box>
    </>
  );
}
