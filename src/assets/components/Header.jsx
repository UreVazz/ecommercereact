import Logo from "./Logo";
import Navbar from "./Navbar";
import { ShoppingCart } from 'lucide-react';

function Header() {
  return (
    <div className="header">
    <Logo />
    <Navbar />
    <ShoppingCart />
    </div>
  )
}

export default Header
