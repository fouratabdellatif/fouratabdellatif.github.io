/* eslint-disable array-callback-return */
import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { TechContainer, TechH1, TechH2, TechP } from './TechElements';
import CustomDivider from '../CustomDivider';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '80%',
  },
  techContainer: {
    
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo: {
    width: '100px',
    height: '100px',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
  },
  mernLogo: {
    width: '200px',
    height: '100px',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
  },
  designLogo: {
    width: '200px',
    height: '100px',
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'block',
  },
  grid: {
    marginBottom: '50px',
  }
})

function TechSection() {

  const classes = useStyles();

  return (
    <>
      <TechContainer id='tech'>
        <TechH1>Technologies & Skills</TechH1>
        <CustomDivider />
        <Container className={classes.container}>
          <Grid container xs={12} spacing={5} className={classes.grid}>
            <Grid item xs={12} sm={6} md={3}>
              <TechH2>Front-End Techs</TechH2>
              <TechP>
                <ul>
                  <li>Experience with ReactJS</li>
                </ul>
              </TechP>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TechH2>Back-End Techs</TechH2>
              <TechP>
                <ul>
                  <li>Experience with NodeJS and MongoDB</li>
                </ul>
              </TechP>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TechH2>Other Techs & Languages</TechH2>
              <TechP>
                <ul>
                  <li>Symfony 4</li>
                  <li>HTML, CSS, JS</li>
                  <li>Java, JEE, Java Swing, JavaFx</li>
                  <li>Redux</li>
                </ul>
              </TechP>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TechH2>Other Skills</TechH2>
              <TechP>
                <ul>
                  <li>Project Management</li>
                  <li>Team Management</li>
                  <li>Data Analysis</li>
                  <li>BI Consulting</li>
                </ul>
              </TechP>
            </Grid>
          </Grid>
          <Grid container xs={12} spacing={10} className={classes.techContainer}>
            <Grid item xs={6} sm={6} md>
              <img src='/images/react.png' alt='react' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/node.png' alt='node' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/mongo.png' alt='mongo' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/redux.png' alt='redux' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/java.png' alt='java' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/python.png' alt='git' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/html.png' alt='html' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/css.png' alt='css' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/js.png' alt='js' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/mysql.png' alt='mysql' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/symfony.png' alt='symfony' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/laravel.png' alt='powerbi' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/wordpress.png' alt='wordpress' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/wixwhite.png' alt='wix' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/git.png' alt='git' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/figma.png' alt='figma' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/talend.png' alt='powerbi' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/powerbi.png' alt='powerbi' className={classes.logo} />
            </Grid>
            {/* <Grid item xs={6} sm={6} md>
              <img src='/images/react-native.png' alt='react-native' className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={6} md>
              <img src='/images/photoshop.png' alt='photoshop' className={classes.logo} />
            </Grid> */}
          </Grid>
        </Container>
      </TechContainer>
    </>
  )
}

export default TechSection
