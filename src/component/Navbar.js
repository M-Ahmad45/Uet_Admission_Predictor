import React from "react";
import {
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    transition: "all 0.5s ease-in-out",
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
  navbar_toggle: {
    border: "3px solid transparent",
    position: "fixed",
    right: "6%",
    top: "40px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  icon_bar: {
    width: "25px",
    backgroundColor: "#686868",
    height: "3px",
    margin: "5px 4px",
    borderRadius: "5px",
  },
  toggle_navbar: {
    transition: "all 0.5s ease-in-out",
    overflow: "hidden",
    width: "100%",
    height: "100px",
    position: "sticky",
    backgroundColor: "#f9f9f9",
  },
  toggled_navbar: {
    transition: "all 0.5s ease-in-out",
    overflow: "hidden",
    width: "100%",
    height: "350px",
    position: "sticky",
    backgroundColor: "#f9f9f9",
  },
  toggle_logo: {
    cursor: "pointer",
    width: "134px",
    height: "90px",
    marginTop: "2px",
    marginLeft: "5%",
    marginRight: "40px",
    float: "none",
  },
  tog_ent: {
    float: "none",
    display: "none",
    textAlign: "left",
    color: "#686868",
    marginTop: "40px",
    marginLeft: "5%",
    textDecoration: "none",
    fontSize: "30px",
    "&:hover": {
      color: "#2668aa",
    },
  },
}));

function toggle() {
  let x = document.getElementById("toggle_navbar");
  let ent = document.getElementsByClassName("makeStyles-tog_ent-9");
  if (x.className === "makeStyles-toggle_navbar-6") {
    x.className = "makeStyles-toggled_navbar-7";
    for (let i = 0; i < 3; i++) { ent[i].style.display = "block"; }}
  else {
    x.className = "makeStyles-toggle_navbar-6";
    for (let i = 0; i < 3; i++) { ent[i].style.display = "none"; }}
}

function Navbar() {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <nav>
      {isMobile ? (
          <nav className={styles.toggle_navbar} id="toggle_navbar">
            <div className={styles.navbar_toggle} onClick={toggle}>
              <div className={styles.icon_bar}></div>
              <div className={styles.icon_bar}></div>
              <div className={styles.icon_bar}></div>
            </div>
            <div>
              <Link to="/" className={styles.toggle_logo} id="logo">
                <img className={styles.toggle_logo} src={require("./logo.png")} alt="logo"/>
              </Link>
              <Link to="/about" className={styles.tog_ent} id="toggled">About</Link>
              <Link to="/contact" className={styles.tog_ent} id="toggled">Contact Us</Link>
              <Link to="/faq" className={styles.tog_ent} id="toggled">FAQ</Link>
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
