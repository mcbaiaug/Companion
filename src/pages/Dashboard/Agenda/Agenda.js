import { makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import React, { useState } from 'react'
import AgendaForm from './AgendaForm'
import AgendaItem from './AgendaItem'
// import { DragDropContext } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme) => ({
  title: {
    position: 'sticky',
    top: 0,
    zIndex: 5,
    background: theme.palette.primary.dark,
  },
  bottom: {
    position: 'sticky',
    bottom: 0,
    zIndex: 5,
    background: theme.palette.primary.dark,
  },
  add: {
    '&:hover': {
      color: 'secondary',
    },
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
  const[addItem, setAddItem] = useState(false)


  const addAgenda = (text, description) => {
    const newAgenda = [...agenda, { text, description }]
    setAgenda(newAgenda)
  }

  const completeItem = (index) => {
    const newAgenda = [...agenda]
    let current = newAgenda[index].isCompleted
    newAgenda[index].isCompleted = !current
    setAgenda(newAgenda)
    console.log('check this:')
    console.log(agenda)
  }

  const removeItem = (index) => {
    const newAgenda = [...agenda]
    newAgenda.splice(index, 1)
    setAgenda(newAgenda)
  }

  return (
    <div>
      <div className={classes.title}>
        <Typography variant="h3"> Agenda </Typography>
      </div>
      {agenda.map((agenda, index) => (
        <AgendaItem key={index} index={index} agenda={agenda} completeItem={completeItem} removeItem={removeItem} />
      ))}
      <div className={classes.bottom}>
        {addItem && <AgendaForm addAgenda={addAgenda} />}
        
        <IconButton  onClick={() => {setAddItem(!addItem)}} className={classes.add} size="small" aria-label="delete">
          <AddCircleIcon />
        </IconButton>

      </div>
    </div>
  )
}

export default Agenda
