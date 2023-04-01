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
      <AppBar sx={{ backgroundColor: "#121212" }} position="static">
        <Toolbar >
          <Box display="flex" flexGrow={1} alignItems='center' justifyContent='center'>
            <IconButton href="mailto: thomsson_99@hotmail.com">
              <MailIcon style={{ height: "4vh", width: "4vh", color: '#fff' }} />
            </IconButton>
            <IconButton
              onClick={() => redirectPage("https://www.linkedin.com/in/karl-thomsson-38203819b/")}
            >
              <LinkedInIcon style={{ height: "4vh", width: "4vh", color: '#fff' }} />
            </IconButton>
            <IconButton
              onClick={() => redirectPage("https://github.com/thomssonkarl")}
            >
              <GitHubIcon style={{ height: "4vh", width: "4vh", color: '#fff' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Footer