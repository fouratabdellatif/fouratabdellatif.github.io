// import { makeStyles } from '@material-ui/core'
import React from 'react'
import { AboutContainer, AboutH1, AboutWrapper, AboutP } from './AboutElements';
import CustomDivider from '../CustomDivider';
import Button from '../Button';
import { Container, makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    // width: '90%',
  },
  cv: {
    height: '450px',
    width: '80%',
    filter: 'blur(1.5px)',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  }
})

const About = () => {

  const classes = useStyles();

  return (
    <AboutContainer id='about'>
      <Container className={classes.container}>
        <AboutH1>About Me</AboutH1>
        <CustomDivider />
        <AboutWrapper>
          <Grid container xs={12}>
            <Grid item xs={12} sm={6} md={6}>
              <AboutP>
                I am a 24 years old IT Engineering Student, always open to projects, passioned about Business Intelligence and Web Development.
                <br />
              </AboutP>
              <Button cv='/uploads/CV Fourat Abdellatif FR.pdf'>
                My CV - FR
              </Button>
              <Button cv='/uploads/CV Fourat Abdellatif ENG.pdf'>
                My CV - EN
              </Button>
            </Grid>
            <Grid item xs={12} sm={1} md={1}></Grid>
            <Grid item xs={12} sm={5} md={5}>
              <img src='/images/cv.png' alt='cv' className={classes.cv} />
            </Grid>
          </Grid>
        </AboutWrapper>
      </Container>
    </AboutContainer >
  )
}

export default About;
