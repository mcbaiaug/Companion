import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  align: {
    verticalAlign: 'middle',
  },
}))

function AgendaForm({ addAgenda }) {
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const classes = useStyles()

  const handleSubmit = (e) => {
    console.log('check')
    e.preventDefault()
    if (!text || !description) return
    addAgenda(text, description)
    setText('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        multiline
        variant="outlined"
        label="Task"
        name="email"
        value={text}
        color="secondary"
        className={classes.align}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <TextField
        multiline
        variant="outlined"
        label="Description"
        name="email"
        value={description}
        color="secondary"
        className={classes.align}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      {/* <input type="text" className="input" value={text} onChange={(e) => setText(e.target.value)} /> */}
      {/* <input type="text" className="input" value={description} onChange={(e) => setDescription(e.target.value)} /> */}
      <Button type="submit" variant="contained" color="primary" className={classes.align}>
        Add
      </Button>
    </form>
  )
}

export default AgendaForm
