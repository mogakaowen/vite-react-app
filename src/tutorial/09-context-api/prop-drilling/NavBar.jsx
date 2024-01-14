import { useState } from "react";
import NavLinks from "./NavLinks";

const NavbarPropDrilling = () => {
  const [user, setUser] = useState({ name: "Superuser" });

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ name: "Superuser" });
  };

  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavLinks user={user} logout={logout} login={login} />
    </nav>
  );
};
export default NavbarPropDrilling;
