import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { ShoppingCart } from "lucide-react";
import ThemeContext from "./context";
import { CartContext } from "./Cartcontext";

function Header() {
  const { temaActual, handleTema } = useContext(ThemeContext);
  const { totalQuantity } = useContext(CartContext);

  const buttonSwitch =
    temaActual.background === "#333" ? "Light Theme" : "Dark Theme";

  return (
    <div className="header">
      <Logo />
      <Navbar />
      <div>
        <button
          onClick={handleTema}
          style={{
            background: temaActual.background,
            color: temaActual.font,
            border: temaActual.border || "1px solid #ccc",
            padding: "6px 12px",
            marginRight: "16px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {buttonSwitch}
        </button>

        <div style={{ position: "relative", display: "inline-block" }}>
          <Link to="/carrito" style={{ position: "relative" }}>
            <ShoppingCart />
            {totalQuantity > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
