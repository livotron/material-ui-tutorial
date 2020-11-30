import { cloneElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../Theme';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from '../../assets/logo.svg'

function ElevationScroll({children}) {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
    },
  logo: {
    height: "7em"
  },
  tabContainer: {
    marginLeft: 'auto'
  }
}))

export default function Header(props) {
  const classes = useStyles(theme);
  console.log(classes);
  // classes.text.marginLeft = '200px'
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <ToolBar disableGutters>
            <img src={logo} className={classes.logo} alt="company logo" />
            <Tabs className={classes.tabContainer}>
              <Tab label="Home"/>
              <Tab label="Services"/>
              <Tab label="The Revolution"/>
              <Tab label="About Us"/>
              <Tab label="Contacts"/>
            </Tabs>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  )
}