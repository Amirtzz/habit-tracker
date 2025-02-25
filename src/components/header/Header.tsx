import { Search } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import WbSunnyIcon from '@mui/icons-material/WbSunny';
interface HeaderProps{
    title:string
    onLogoClick?:()=>void
}

export default function Header({title,onLogoClick}:HeaderProps){
    return       <AppBar position="sticky">
    <Toolbar>
      <IconButton onClick={onLogoClick}>
        <WbSunnyIcon sx={{ color:'white' }}/>
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
      >
        {title}
      </Typography>
     
    </Toolbar>
  </AppBar>
}