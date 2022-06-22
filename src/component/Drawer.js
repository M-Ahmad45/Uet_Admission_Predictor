import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about">Faq</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
   
      </IconButton>
    </>
  );
}
export default DrawerComponent;

const styles = {
  sideNav: {
    marginTop: '-60px',
    zIndex: 3,
    marginLeft: '0px',
    position: 'fixed',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  }
};
  
export default class MarerialUIDrawer 
    extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpened: false,
    };
  }
  toggleDrawerStatus = () => {
    this.setState({
      isDrawerOpened: true,
    })
  }
  closeDrawer = () => {
    this.setState({
      isDrawerOpened: false,
    })
  }
  render() {
    const { isDrawerOpened } = this.state;
    return (
      <div>
         <div style={styles.sideNav}>
            <IconButton onClick={this.toggleDrawerStatus}>
              {!isDrawerOpened ? <ReorderIcon /> : null }
            </IconButton>
          </div>
          <Divider/>
        <Drawer
          variant="temporary"
          open={isDrawerOpened}
          onClose={this.closeDrawer}
        >
          <Link to='/about' style={styles.link}>
            <List>
              <ListItem button key='About Us'>
                <ListItemIcon><AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText primary='About Us' />
              </ListItem>
            </List>
          </Link>
          <Link to='/contact' style={styles.link}>
          <List>
            <ListItem button key='Contact Us'>
              <ListItemIcon><PermContactCalendarIcon/>
              </ListItemIcon>
              <ListItemText primary='Contact Us' />
            </ListItem>
            </List>
          </Link>
        </Drawer>
      </div>
    );
  }
}