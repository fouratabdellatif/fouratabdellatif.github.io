import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import HomeStart from '../HomeStart/HomeStart';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import TechSection from '../Tech/TechSection';
import About from '../About/About';
import ContactForm from '../Contact/ContactForm';

function HomePage() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HomeStart />
            <Projects />
            <TechSection />
            <About />
            <ContactForm />
            <Footer />
        </>
    )
}

export default HomePage
