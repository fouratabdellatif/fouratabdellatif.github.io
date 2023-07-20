import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarWrapper,
    SidebarMenu,
    SocialIcons,
    SocialIconLink
} from './SidebarElements'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'


function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="tech" onClick={toggle}>
                        Technologies
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        About Me
                    </SidebarLink>
                    <SidebarLink>
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
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
