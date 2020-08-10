import React, { useState } from 'react'
import AgendaItem from './AgendaItem'
import AgendaForm from './AgendaForm'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'sticky',
    top: 0,
    zIndex: 5,
    background: theme.palette.primary.dark,
  },
}))

function Agenda() {
  const classes = useStyles()
  const [agenda, setAgenda] = useState([
    { text: 'This is my first thing to do', description: 'This is my first description', isCompleted: false },
    { text: 'This is my second thing to do', description: 'This is my first description', isCompleted: false },
    { text: 'This is my third thing to do', description: 'This is my first description', isCompleted: false },
    { text: 'This is my third thing to do', description: 'This is my first description', isCompleted: false },
    {
      text:
        'This is my third thing to s is my third thing to ds is my third thing to ds is my third thing to ds is my third thing to ds is my third thing to d do',
      description: 'This is my first description',
      isCompleted: false,
    },
    {
      text:
        'This is my third thing to s is my third thing to ds is my third thing to ds is my third thing to ds is my third thing to ds is my third thing to d do',
      description: 'This is my first description',
      isCompleted: false,
    },
    {
      text:
        'This is my third thing to s is my third thing to ds is my third thing to ds is my third thing to ds is my third thing to ds is my third thing to d do',
      description: 'This is my first description',
      isCompleted: false,
    },
    {
      text:
        'This is my third thing to s is my third thing to ds is my third thing to ds is my third thing to ds is my third thing to ds is my third thing to d do',
      description: 'This is my first description',
      isCompleted: false,
    },
  ])

  const addAgenda = (text, description) => {
    const newAgenda = [...agenda, { text, description }]
    setAgenda(newAgenda)
  }

  const completeItem = (index) => {
    const newAgenda = [...agenda]
    let current = newAgenda[index].isCompleted
    newAgenda[index].isCompleted = !current
    setAgenda(newAgenda)
  }

  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h3"> Agenda </Typography>
      </div>
      {agenda.map((agenda, index) => (
        <AgendaItem key={index} index={index} agenda={agenda} completeItem={completeItem} />
      ))}
      <AgendaForm addAgenda={addAgenda} />
    </div>
  )
}

export default Agenda
