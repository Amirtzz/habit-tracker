import { Search } from "@mui/icons-material"
import { AppBar, Toolbar, Typography } from "@mui/material"

interface HeaderProps{
    title:string
}

export default function Header({title}:HeaderProps){
    return       <AppBar position="static">
    <Toolbar>
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