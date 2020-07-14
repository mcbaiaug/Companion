import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { ReactComponent as Finn } from './finn.svg'
import { SvgIcon } from '@material-ui/core'
import Companion from './Companion'
import NoteIcon from '@material-ui/icons/Note';

const drawerWidth = 55

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`, 
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  profIcon: {
    marginLeft: 'auto',
    '&:hover': {
        backgroundColor: 'transparent',
      },
  },
  noHover: {
    pointerEvents: 'none',
  },
}))



function ResponsiveDrawer({index,setIndex}) {
  let window
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  
  const icons = [
    {
      id:0,
      icon: 'InboxIcon',
    },
    {
      id:1,
      icon: 'MailIcon',
    },  
    {
      id:2,
      icon: 'NoteIcon',
    },   
    {
      id:3,
      icon: 'Drafts',
    },
  ]


 function getIcon(icon) {
    switch(icon) {
      case 'InboxIcon':
        return (<InboxIcon aria-label='Inbox Icon'/>);
      case 'MailIcon':
        return (<MailIcon aria-label='Mail Icon'/>);
      case 'NoteIcon':
        return (<NoteIcon aria-label='Note Icon'/>);
      default:
        return (<MailIcon aria-label='Mail Icon'/>);
    }
  }



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List>
        {icons.map((message) => (
          <ListItem button key={message.id}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
        <ListItemIcon> {getIcon(message.icon)} </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  )


  

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar  className={classes.appBar}> 
      {/* was position fixed */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <IconButton edge="start" className={classes.profIcon} onClick={() => setIndex(index+1)}   color="inherit" aria-label="menu">
            <SvgIcon component={Finn} viewBox="0 0 10 10" fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default ResponsiveDrawer
