import React from "react";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sideNav: {
    marginTop: '-60px',
    zIndex: 3,
    marginLeft: '0px',
    position: 'fixed',
  },
  navbar: {
    overflow: "hidden",
    width: "100%",
    height: "100px",
    position: "sticky",
    backgroundColor: "#f9f9f9",
  },
  logo: {
    cursor: "pointer",
    width: "134px",
    height: "90px",
    marginTop: "2px",
    marginLeft: "5%",
    marginRight: "40px",
    float: "left",
  },
  nav_ent: {
    float: "right",
    display: "block",
    color: "#686868",
    marginTop: "30px",
    marginRight: "140px",
    textDecoration: "none",
    fontSize: "30px",
    "&:hover": {
      color: "#2668aa",
    },
  },
  nav_ent_mob: {
    float: "right",
    display: "block",
    color: "#686868",
    marginTop: "30px",
    marginRight: "140px",
    textDecoration: "none",
    fontSize: "30px",
    "&:hover": {
      color: "#2668aa",
    },
  },
  navbar_toggle: {
      border: "3px solid transparent",
      position: "fixed",
      right: "6%",
      top: "40px",
      cursor: "pointer",
  },
  icon_bar: {
      width: "25px",
      backgroundColor: "#686868",
      height: "3px",
      margin: "5px 4px",
      borderRadius: "5px",
  },
}));

function Navbar() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // function toggle() {
  //   let x = document.getElementById("navbar");
  //   if (x.className === "navbar") {
  //       x.className += "_toggle";
  //   }
  //   else {
  //       x.className = "navbar";
  //   }
  // }

  return (
    <nav>
      {isMobile ? (
          <nav className={styles.navbar} id="navbar">
            <div className={styles.navbar_toggle}>
              <div className={styles.icon_bar}></div>
              <div className={styles.icon_bar}></div>
              <div className={styles.icon_bar}></div>
            </div>
          </nav>
        ) : (
          <nav className={styles.navbar} id="navbar">
            <Link to="/" className={styles.logo}>
              <img className={styles.logo} src={require("./logo.png")} alt="logo"/>
            </Link>
            <Link to="/faq" className={styles.nav_ent}>FAQ</Link>
            <Link to="/contact" className={styles.nav_ent}>Contact Us</Link>
            <Link to="/about" className={styles.nav_ent}>About</Link>
          </nav>
        )
      }
    </nav>
  );
}
export default Navbar;
