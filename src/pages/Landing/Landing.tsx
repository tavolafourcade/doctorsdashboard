import { Container, Button } from '@mui/material'
import doctorImage from '../../assets/doctor-image.png'
import Root, { classes } from './styles'
import { Logo } from '../../components'
const Landing = () => (
  <Root className={classes.container} style={{ height: '100vh' }}>
    <Container className={classes.mainHeader}>
      <Logo />
    </Container>
    <Container style={{ display: 'flex' }}>
      <div className={classes.description}>
        <h1 >Doctors Dashboard</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit ducimus aliquam!
          Nesciunt quaerat doloremque rerum nihil, aut enim, voluptas, amet hic eius placeat debitis quos atque.
          Iste, totam blanditiis!
        </p>
        <Button size='medium' style={{ width: '200px' }} variant='contained'>Login/Register</Button>

      </div>
      <img alt='Doctor' className={classes.doctorImage} src={doctorImage} />
    </Container>
  </Root>

)

export default Landing
