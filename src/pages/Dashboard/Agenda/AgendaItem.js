import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Draggable, { DraggableCore } from 'react-draggable'

const useStyles = makeStyles((theme) => ({}))

const AgendaItem = ({ agenda, index, completeItem }) => {
  const classes = useStyles()
  const { text, description, isCompleted } = agenda

  return (
    <Accordion square>
      <AccordionSummary>
        <Typography style={{ textDecoration: isCompleted ? 'line-through' : '', marginRight:'7%', }}>{text}</Typography>
        <FormControlLabel

          style={{position:'absolute', right:0, display:'inline-block'}}
          aria-label="Complete"
          onClick={(event) => {
            event.stopPropagation()
            completeItem(index)
          }}
          onFocus={(event) => event.stopPropagation()}
          control={<Checkbox size="small" />}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="secondary">{description}</Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default AgendaItem
