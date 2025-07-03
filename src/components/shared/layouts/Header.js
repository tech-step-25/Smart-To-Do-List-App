import { Box, Typography, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import hero from "../../../assets/hero.png";

export default function Header({ type, heading, content, btnText }) {
  return (
    <Box component="header">
      {/*search*/}
      <Box>
        <TextField label="search goal" variant="outlined" />
      </Box>

      {/*heading*/}
      <Box>
        <Typography variant="h1" component="h1">
          {heading}
        </Typography>
        <Typography variant="body1" component="p">
          {content}
        </Typography>

        {/*actions*/}
        {["homepage", "goals", "tasks"].includes(type) ? (
          <>
            <Box component="img" src={hero} alt="" />
            <Button variant="contained">{btnText}</Button>
          </>
        ) : (
          <>
            <Button variant="contained">
              <EditIcon />
            </Button>
            <Button variant="contained">
              <DeleteIcon />
            </Button>
            <Button variant="contained" startIcon={<AddIcon />}>
              {btnText}
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
