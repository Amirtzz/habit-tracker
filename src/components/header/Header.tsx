import { Search } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
// logoye header ro az nazi begiram import bokonam
interface HeaderProps{
    title:string
}

export default function Header({title}:HeaderProps){
    return       <AppBar position="sticky">
    <Toolbar>
      <IconButton>
        {/* logo ro inja biyaram */}
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        {title}
      </Typography>
     
    </Toolbar>
  </AppBar>
}