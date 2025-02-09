import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps
} from "./plasmic/theme_switcher/PlasmicHeader";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { useSelector } from "@plasmicapp/react-web/lib/host";

export interface HeaderProps extends DefaultHeaderProps {}

function Header_(props: HeaderProps, ref: HTMLElementRefOf<"div">) {
  const {darkMode, toggleDarkMode } = useSelector("darkModeData");

  return (
  <PlasmicHeader 
  headerContainer={{ ref }} 
  themeSwitch={{
    onChange: () => {
      toggleDarkMode();
    },
    // Pass the value of DarkMode to the switch component
    isChecked: darkMode,
  }}
  />
  );
}

const Header = React.forwardRef(Header_);
export default Header;
