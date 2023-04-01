import Box from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {

  const redirectPage = (destination : string) => {
    window.open(destination, "_blank");
  };

  return (
    <div className="toolbar-bottom">
      <AppBar sx={{ backgroundColor: "#121212" }} position="static" elevation={0}>
        <Toolbar >
          <Box display="flex" flexGrow={1} alignItems='center' justifyContent='center'>
            <IconButton href="mailto: thomsson_99@hotmail.com">
              <MailIcon sx={{ height: "4vh", width: "4vh", color: '#fff', '&:hover': {color: '#757761'}, left:0  }} />
            </IconButton>
            <IconButton
              onClick={() => redirectPage("https://www.linkedin.com/in/karl-thomsson-38203819b/")}
            >
              <LinkedInIcon sx={{ height: "4vh", width: "4vh", color: '#fff', '&:hover': {color: '#757761'}, right: 0 }} />
            </IconButton>
            <IconButton
              onClick={() => redirectPage("https://github.com/thomssonkarl")}
            >
              <GitHubIcon sx={{ height: "4vh", width: "4vh", color: '#fff', '&:hover': {color: '#757761'} }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Footer