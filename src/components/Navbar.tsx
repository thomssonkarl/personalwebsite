import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

function Navbar() {
  return (
    <div className='toolbar-top'>
      <AppBar position="static" sx={{backgroundColor: '#121212', marginTop: '20px'}} elevation={0}> 
        <Toolbar>
          <div className="header-title">Karl Thomsson <br/> Software Engineer & Computer Enthusiast </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Navbar