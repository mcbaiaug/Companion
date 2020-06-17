import React from 'react'
import { Button, AppBar, Typography, Toolbar, IconButton, MenuIcon } from '@material-ui/core'

function Home() {
    return (
        <div>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        
                    </IconButton>
                    <Typography variant="h6" >
                        News
                     </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Home
