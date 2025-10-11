import Logo from "./Logo";
import Navbar from "./Navbar";
import { ShoppingCart } from 'lucide-react';
import ThemeContext from "./context";
import { useContext } from "react";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">
          <path fill="${encodeURIComponent("#fff")}" 
          d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zM19.2 10a6.7 6.7 0 11-6.6-6.6A5.8 5.8 0 0019.2 10z"/>
          </svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      // ☀️ icono de sol
      backgroundImage: `url('data:image/svg+xml;utf8,
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">
        <path fill="${encodeURIComponent("#fff")}" 
        d="M9.3 1.7V3.8h1.4V1.7H9.3zm0 14.6v2.1h1.4v-2.1H9.3zM4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5 4.8 4.3l-.6-1.8zM15.8 17.5l.7-1.8 1.8-.7-1.8-.7-.7-1.8-.6 1.8-1.9.7 1.9.7.6 1.8zM10 5.1A4.9 4.9 0 0010 15a4.9 4.9 0 000-9.9z"/>
        </svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
  },
}));


function Header() {


  const {temaActual, handleTema} = useContext(ThemeContext);
  
  return (
    <div className="header">
    <Logo />
    <Navbar />
    <div>
    {/* <button onClick={handleTema} style={{background:temaActual.background, color:temaActual.font}}>Cambiar Tema</button> */}
      <FormControlLabel
          control={
            <MaterialUISwitch
              onChange={handleTema}
              checked={temaActual.background === "#333"} 
            />
          }
          label=""
        />
    <ShoppingCart />
    </div>
    </div>
  )
}

export default Header
