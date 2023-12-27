import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavBarContext = createContext();

// custom hook
export const useNavBarContext = () => useContext(NavBarContext);

const NavBar = () => {
  const [user, setUser] = useState({ name: "John" });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavBarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavBarContext.Provider>
  );
};
export default NavBar;
