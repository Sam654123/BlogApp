import { Link } from "react-router-dom";
import background from "../../assets/background.png"
import classes from "./styles.module.css";
import logo from "../../assets/bloglogo.svg"

export default function Header() {
  return (
    <div className={classes.header}>
      <img src={logo} alt="" />
      <img src={background} alt="" />

      <h3>BLOG HERE App</h3>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li>Add Blog</li>
        </Link>
      </ul>
    </div>
  );
}
