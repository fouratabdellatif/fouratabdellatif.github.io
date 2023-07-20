import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { ContactContainer, ContactH1, ContactH2, ContactWrapper } from './ContactElements';
import { Container } from '@material-ui/core';
import CustomDivider from '../CustomDivider';
import emailjs from 'emailjs-com';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#FCB362',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FCB362',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ffffff',
            },
            '&:hover fieldset': {
                borderColor: '#FCB362',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FCB362',
            },
        },
    },
})(TextField);

const CssButton = withStyles((theme) => ({
    root: {
        color: '#1c1c28',
        fontWeight: 800,
        backgroundColor: '#ffffff',
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            backgroundColor: '#FCB362',
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    form: {
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(4),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    submit: {
        margin: theme.spacing(4, 0, 0),
        width: '240px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    loader: {
        color: '#1c1c28',
    },
    loading: {
        margin: theme.spacing(2, 0, 1, 0),
        cursor: 'not-allowed',
        width: '240px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    input: {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: 'blue'
        }
    }
}));

export default function ContactForm() {

    const classes = useStyles();

    const [loader, setLoader] = useState(false);

    const initState = {
        to_name: "Fourat Abdellatif",
        subject: "",
        message: "",
        from_name: "",
        from_email: "",
        from_phone: "",
    };

    const [send, setSend] = useState(initState);

    const handleChange = (e) => {
        setSend({ ...send, [e.target.name]: e.target.value });
    };

    const clear = () => {
        setSend({
            to_name: "Fourat Abdellatif",
            subject: "",
            message: "",
            from_name: "",
            from_email: "",
            from_phone: "",
        });
    };

    const sendEmail = async (e) => {
        await e.preventDefault();
        await setLoader(true);
        await emailjs.send(
            "gmail", "template_vgtm7c1", {
            to_name: "Fourat Abdellatif",
            subject: send.subject,
            message: send.message,
            from_name: send.from_name,
            from_email: send.from_email,
            from_phone: send.from_phone,
        }, 'user_VJLF6VS3Eyy38m2oP04Gp');
        await setLoader(false);
        await clear();
    }

    return (
        <ContactContainer id='contact'>
            <Container className={classes.container}>
                <ContactH1>Contact Me</ContactH1>
                <CustomDivider />
                <ContactH2>If you have something in mind, don't hesitate to ask.</ContactH2>
                <ContactWrapper>
                    <form className={classes.form} validate onSubmit={sendEmail}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="from_name"
                                    autoComplete="name"
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        style: { color: '#ffffff' },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone Number"
                                    name="from_phone"
                                    autoComplete="tel"
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        style: { color: '#ffffff' },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="from_email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        style: { color: '#ffffff' },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="subject"
                                    label="Subject"
                                    name="subject"
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        style: { color: '#ffffff' },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <CssTextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    type='text'
                                    id="message"
                                    label="Message"
                                    name="message"
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        style: { color: '#ffffff' },
                                    }}
                                    multiline
                                    rows='4'
                                />
                            </Grid>
                        </Grid>
                        {loader ? (
                            <CssButton
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.loading}
                            >
                                <CircularProgress className={classes.loader} />
                            </CssButton>
                        ) : (
                            <CssButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Send
                            </CssButton>
                        )}
                    </form>
                </ContactWrapper>
            </Container>
        </ContactContainer>
    );
}