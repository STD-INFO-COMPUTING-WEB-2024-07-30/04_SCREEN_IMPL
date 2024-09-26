import React, { useContext } from "react";

const ThemeContext = React.createContext("dark");

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h1 style={{ color: theme === "dark" ? "white" : "black"  , backgroundColor:theme === "dark" ? "black" : "white"} }>
        Welcome to my website!
      </h1>
    </div>
  );
}
export default Header;
