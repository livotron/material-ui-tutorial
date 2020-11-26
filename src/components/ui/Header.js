import { cloneElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
    const { children, window } = props;
    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
export default function Header(props) {
    return (
        <ElevationScroll>
        <AppBar position="fixed">
            <ToolBar>
                Arc Development

            </ToolBar>
        </AppBar>
        </ElevationScroll>

    
    )
}