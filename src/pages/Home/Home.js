import React from 'react'
import { Button, AppBar, Typography, Toolbar, IconButton, MenuIcon, SvgIcon, Box, Paper, Grid, TextareaAutosize } from '@material-ui/core'
import { flexbox } from '@material-ui/system';
import { ReactComponent as Finn } from './finn.svg';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "./Nav"
import { ReactComponent as Stages } from './CatStages.svg';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cat: {

    },
}));




function Home() {
    const classes = useStyles()

    return (

        <div>
            <Nav />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    {/* <SvgIcon className={classes.cat} component={Stages} viewBox="0 0 180 180" fontSize="large" /> */}
                    <img className={classes.cat} src={require('./CatStagesAnimation.gif')} alt="Cat Animation" />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Home
