import { Link } from "react-router-dom";

const NavBarItem = ({ title, path }) => {
  if (path.startsWith("#")) {
    // Anchor scroll on same page
    return (
      <li className="mx-4 cursor-pointer">
        <a href={path}>{title}</a>
      </li>
    );
  }

  // Route navigation to another page
  return (
    <div>
    <li className="mx-4 cursor-pointer">
      <Link to={path}>{title}</Link>
    </li>     
    </div>
   
  );
};
export  default NavBarItem;
