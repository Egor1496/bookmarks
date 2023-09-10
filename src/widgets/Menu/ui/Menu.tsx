import { Link } from "react-router-dom";

import sass from "./Menu.module.sass";

import { GroupLinks } from "../../../features";
import { Br, LogoMyNotes, LogoBookMarks, BaseDropMenu} from "../../../shared/ui"; //

const Menu = () => {
  return (
    <div className={sass["MenuWrap"]}>
      <Link to="/bookmarks" >
        <LogoBookMarks />
      </Link>
      <Br />
      <BaseDropMenu /> <Br style={{ "margin": "10px 0" }}/>
      <GroupLinks />
      <Br />
      <Link to="/bookmarks" >
        <LogoMyNotes />
      </Link>
    </div>
  );
}

export { Menu };