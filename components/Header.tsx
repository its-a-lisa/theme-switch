import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps
} from "./plasmic/theme_switcher/PlasmicHeader";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface HeaderProps extends DefaultHeaderProps {}

function Header_(props: HeaderProps, ref: HTMLElementRefOf<"div">) {

  return <PlasmicHeader headerContainer={{ ref }} {...props} />;
}

const Header = React.forwardRef(Header_);
export default Header;
