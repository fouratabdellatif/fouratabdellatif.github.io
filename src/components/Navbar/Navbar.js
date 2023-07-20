import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    SocialIcons,
    SocialIconLink
} from "./NavbarElements";
import { animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles({
    logo: {
        width: '250px',
    }
})

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 100) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const classes = useStyles();

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <img src='/images/fouratportfolio.png' alt='logo' className={classes.logo} />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="projects"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-60}
                                activeClass="active"
                            >
                                Projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="tech"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-60}
                                activeClass="active"
                            >
                                Technologies
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-60}
                                activeClass="active"
                            >
                                About Me
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-60}
                                activeClass="active"
                            >
                                Contact Me
                            </NavLinks>
                        </NavItem>
                        <NavItem>
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
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;