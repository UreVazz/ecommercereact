
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./context";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}) {

  const {temaActual} = useContext(ThemeContext);

  return (
    <div className="bodym" style={{background:temaActual.background, color:temaActual.font}}>
      {children}
      <Header />   
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default Layout;