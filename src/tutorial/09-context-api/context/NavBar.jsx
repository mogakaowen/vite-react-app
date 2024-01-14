import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavBarContext = createContext();

// custom hook
export const useNavBarContext = () => useContext(NavBarContext);

const NavBar = () => {
  const [user, setUser] = useState({ name: "Superuser" });

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ name: "Superuser" });
  };

  return (
    <NavBarContext.Provider value={{ user, logout, login }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavBarContext.Provider>
  );
};
export default NavBar;
