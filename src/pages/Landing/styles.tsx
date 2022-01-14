import { styled } from '@mui/material'

const PREFIX = 'Landing'

export const classes = {
  button     : `${PREFIX}-button`,
  container  : `${PREFIX}-container`,
  description: `${PREFIX}-description`,
  doctorImage: `${PREFIX}-doctorImage`,
  mainHeader : `${PREFIX}-mainHeader`
}

export default styled('div', {
  name: PREFIX
})(() => ({
  [`&.${classes.container}`]: {
    backgroundColor: 'skyblue'
  },
  [`& .${classes.mainHeader}`]: {
    alignItems    : 'left',
    display       : 'flex',
    justifyContent: 'flex-start',
    padding       : '20px'
  },
  [`& .${classes.description}`]: {
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    textAlign     : 'left',
    width         : 'auto'
  },
  [`& .${classes.button}`]: {

  },
  [`& .${classes.doctorImage}`]: {
    width: '50%'
  }
}))
