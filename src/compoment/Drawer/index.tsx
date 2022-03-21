import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logoImg from '../../assets/APISlogo.png';
import './index.css';
import { Chat, Public ,Contacts,HelpCenter,VolumeDown,Assessment,IntegrationInstructions,LeakAdd} from "@mui/icons-material";

const drawerWidth = 72;

export default function PermanentDrawerLeft() {
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img src={logoImg} alt="" className='logoImg'/>

       

        <Divider />
        <List >
          {[<Chat/>, <Public/>, <Contacts/>, <HelpCenter/>,<VolumeDown/>, <Assessment/>, <IntegrationInstructions/>].map((text, index) => (
            <ListItem >
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} /> 
            </ListItem>   
          ))}
        </List>
        <Divider />
        <Divider />
        <List >
          {[<LeakAdd/>].map((text, index) => (
            <ListItem >
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} /> 
            </ListItem>   
          ))}
        </List>
        <Divider />
      </Drawer>
     
    </Box>
  );
}
