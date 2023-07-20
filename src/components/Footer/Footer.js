import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialMedia, SocialMediaWrap, ContactH2, ContactP } from './FooterElements'
import { makeStyles } from '@material-ui/core';
import { Divider, Grid, Container } from '@material-ui/core';

const useStyles = makeStyles({
  logo: {
    width: '250px',
  },
  divider: {
    height: '1px',
    backgroundColor: '#ffffff',
    marginBottom: '30px',
    width: '100%',
  },
  anchor: {
    textDecoration: 'none',
    color: '#ffffff',

    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      color: '#FCB362',
  }
  },
  contactDivider: {
    height: '1px',
    backgroundColor: '#ffffff',
    marginBottom: '30px',
    width: '70%',
  },
  call: {
    marginBottom: '40px'
  },
  email: {
    marginBottom: '40px'
  },
  social: {
    
  }
})

const Footer = () => {

  const classes = useStyles();

  return (
    <FooterContainer>
      <Divider className={classes.divider} />
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <Container>
              <Grid container xs={12}>
                <Grid item xs={12} sm={4} md={4} className={classes.call}>
                  <ContactH2>Call</ContactH2>
                  <Divider className={classes.contactDivider} />
                  <ContactP><a href='tel:+21626699906' className={classes.anchor}>+216 26 699 906</a></ContactP>
                </Grid>
                <Grid item xs={12} sm={4} md={4} className={classes.email}>
                  <ContactH2>Email</ContactH2>
                  <Divider className={classes.contactDivider} />
                  <ContactP><a href='mailto:fourat.abdellatif@esprit.tn' className={classes.anchor}>fourat.abdellatif@esprit.tn</a></ContactP>
                </Grid>
                <Grid item xs={12} sm={4} md={4} className={classes.social}>
                  <SocialIcons>
                    <SocialIconLink href='https://github.com/fouratabdellatif' target='_blank' arial-label='Linkedin'>
                      <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.linkedin.com/in/fourat-abdellatif' target='_blank' arial-label='Linkedin'>
                      <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.facebook.com/fourat.abdellatif.3' target='_blank' arial-label='Facebook'>
                      <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.instagram.com/fourat.abdeltif' target='_blank' arial-label='Instagram'>
                      <FaInstagram />
                    </SocialIconLink>
                  </SocialIcons>
                </Grid>
              </Grid>
            </Container>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
