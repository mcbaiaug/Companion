import React from 'react'
import { Button, AppBar, Typography, Toolbar, IconButton, MenuIcon, SvgIcon, Box, Paper, Grid } from '@material-ui/core'
import { flexbox } from '@material-ui/system';
import { ReactComponent as Finn } from './finn.svg';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function Nav() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar variant="regular">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SvgIcon component={Finn} viewBox="0 0 10 10" fontSize="large" />
                        <Typography variant="h5" >
                            Companion
                    </Typography>
                    </IconButton>
                    <div className={classes.title}>
                        <Button color="inherit">Finn</Button>
                        <Button color="inherit">Asa</Button>
                        <Button color="inherit">Doug</Button>
                    </div>
                    <Button color="secondary">Login</Button>
                    <Button color="secondary">Register</Button>

                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Nav
