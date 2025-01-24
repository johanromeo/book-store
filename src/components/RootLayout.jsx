import "./RootLayout.css";
import { Outlet } from "react-router-dom";
import CartIcon from "./Cart/CartIcon";

function RootLayout() {
  return (
    <div>
      <header className="header-container">
        <h1 style={{ fontSize: 40 }}>Flavoy's Book Store</h1>
        <CartIcon />
      </header>

      {/* Other routes will be placed here between header and footer */}
      <Outlet />
      <footer>&copy; 2025 Johan Romeo. All rights reserved.</footer>
    </div>
  );
}

export default RootLayout;
