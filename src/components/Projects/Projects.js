/* eslint-disable jsx-a11y/anchor-is-valid */
import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import IconColis19 from '../../assets/images/colis-19-home-upgraded.PNG'
// import NoPreview from '../../assets/images/preview.jpg'
import hospitalApp from '../../assets/images/hospital.png'
import portfolio from '../../assets/images/portfolio.png'
import erpInceptum from '../../assets/images/erpinceptum.png'
import ghost from '../../assets/images/ghost.png'
import inceptumje from '../../assets/images/inceptumje.png'
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements';
import CustomDivider from '../CustomDivider';


const useStyles = makeStyles({
  // container: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   display: 'block',
  //   width: '75%',
  // },
  anchor: {
    textDecoration: 'none',
    color: '#1c1c28',
  },
})

const Projects = () => {

  const classes = useStyles();

  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>My Projects</ProjectsH1>
      <CustomDivider />
      <ProjectsWrapper>
        <Grid container xs={12} justify="center" spacing={6}>
          <Grid item xs={12} sm={4} md={4}>
            <a href='https://github.com/fouratabdellatif/Hospital-JAVA-GUI' target='_blank' rel="noreferrer" className={classes.anchor}>
              <ProjectsCard>
                <ProjectsIcon src={hospitalApp} />
                <ProjectsH2>HOSPITAL JAVA GUI</ProjectsH2>
                <ProjectsP>This JAVA GUI is a simple Desktop Application for hospital management systems. It was developed using JAVA.</ProjectsP>
              </ProjectsCard>
            </a>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <a href='https://colis-19.netlify.app/' target='_blank' rel="noreferrer" className={classes.anchor}>
              <ProjectsCard>
                <ProjectsIcon src={IconColis19} />
                <ProjectsH2>COLIS-19</ProjectsH2>
                <ProjectsP>This Web Application is a primary version of a website that helps users manage their parcels online. It was developed using MERN Stack.</ProjectsP>
              </ProjectsCard>
            </a>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <a href='https://www.fouratabdellatif.live' target='_blank' rel="noreferrer" className={classes.anchor}>
              <ProjectsCard>
                <ProjectsIcon src={portfolio} />
                <ProjectsH2>My Portfolio</ProjectsH2>
                <ProjectsP>This is my personal portfolio. I built this one page portfolio using React and styled components.</ProjectsP>
              </ProjectsCard>
            </a>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <ProjectsCard>
              <ProjectsIcon src={erpInceptum} />
              <ProjectsH2>ERP INCEPTUM Junior Entreprise</ProjectsH2>
              <ProjectsP>This ERP Application is created using MERN Stack. It is about meetings and projects management.</ProjectsP>
            </ProjectsCard>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <a href='https://ghostprod.net' target='_blank' rel="noreferrer" className={classes.anchor}>
              <ProjectsCard>
                <ProjectsIcon src={ghost} />
                <ProjectsH2>GhostProd Official Website</ProjectsH2>
                <ProjectsP>This is the official website of GhostProd. It was developed using MERN Stack then changed with another version using Wix.</ProjectsP>
              </ProjectsCard>
            </a>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <a href='https://inceptumje.tn' target='_blank' rel="noreferrer" className={classes.anchor}>
              <ProjectsCard>
                <ProjectsIcon src={inceptumje} />
                <ProjectsH2>INCEPTUM Junior Entreprise Official Website</ProjectsH2>
                <ProjectsP>This is the official website of INCEPTUM Junior Entreprise. It was developed using WordPress.</ProjectsP>
              </ProjectsCard>
            </a>
          </Grid>
        </Grid>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects


/* eslint-disable array-callback-return */
// import React from 'react'
// import IconColis19 from '../../assets/images/colis-19-home.png'
// import NoPreview from '../../assets/images/preview.jpg'
// import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'

// const projects = [
//   {
//     id: 0,
//     name: 'COLIS-19',
//     img: { IconColis19 },
//     desc: 'This Web Application is a primary version of a website that helps users manage their parcels online. It was developed using MERN Stack.'
//   },
//   {
//     id: 1,
//     name: 'HOSPITAL JAVA GUI',
//     img: { NoPreview },
//     desc: 'This JAVA GUI is a simple Desktop Application for hospital management systems. It was developed using JAVA.'
//   }
// ]

// const Projects = () => {
//   return (
//     <ProjectsContainer id='projects'>
//       <ProjectsH1>My Projects</ProjectsH1>
//       {projects.map((project) => {
//         <ProjectsWrapper>
//           <ProjectsCard key={project.id}>
//             <ProjectsIcon src={project.img} />
//             <ProjectsH2>{project.name}</ProjectsH2>
//             <ProjectsP>{project.desc}</ProjectsP>
//           </ProjectsCard>
//         </ProjectsWrapper>
//       })}
//     </ProjectsContainer >
//   )
// }

// export default Projects

