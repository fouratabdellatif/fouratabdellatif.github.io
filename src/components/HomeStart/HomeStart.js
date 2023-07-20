import { Grid, makeStyles } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import {
    HomeStartContainer,
    HomeStartBg,
    // ImageBg,
    HomeStartContent,
    HomeStartH1,
    HomeStartP,
    HomeStartBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HomeStartElements';

const useStyles = makeStyles({
    btn: {
        borderRadius: '50px',
        whiteSpace: 'nowrap',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s ease-in-out',
        zIndex: 5,
        height: '50px',
        padding: '0px 20px 0px 20px',
        color: '#1c1c28',
        fontSize: '20px',
        fontWeight: '700',

        // '&:hover': {
        //     transition: 'all 0.2s ease-in-out',
        //     background: `${({ primary }) => (primary ? '#fff' : '#FCB362')}`,
        // }
    },
    anchor: {
        textDecoration: 'none',
    },
    avatar: {
        width: '300px',
        height: '300px',
        margin: 'auto',
        display: 'block',
    },
    avatarImg: {
        width: '300px',
        height: '390px',
        margin: '30px 40px auto',
        display: 'block',
        transform: 'scale(1.6)'
    },
    container: {
        marginRight: 0,
        marginLeft: 0,
    }
})

function HomeStart() {

    const classes = useStyles();

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HomeStartContainer id='home'>
            <HomeStartBg />
            <HomeStartContent>
                <Grid container xs={12} spacing={10}>
                    <Grid item xs={12} sm={7} md={7}>
                        <HomeStartH1>Welcome to My Personal Portfolio</HomeStartH1>
                        <HomeStartP>An aspiring IT Engineering Student always hoping to take it to the next level.</HomeStartP>
                        <HomeStartBtnWrapper>
                            <a href='mailto:fourat.abdellatif@esprit.tn' target='_blank' className={classes.anchor} rel="noreferrer">
                                <button
                                    className={classes.btn}
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHover}
                                    primary='true'
                                    dark='true'
                                >
                                    Contact Me for Job {hover ? <ArrowForward /> : <ArrowRight />}
                                </button>
                            </a>
                        </HomeStartBtnWrapper>
                    </Grid>
                    <Grid item xs={12} sm={5} md={5}>
                        <Avatar className={classes.avatar}>
                            <img src='/images/FouratAbdellatif.jpg' alt='profile' className={classes.avatarImg} />
                        </Avatar>
                    </Grid>
                </Grid>
            </HomeStartContent>
        </HomeStartContainer>
    )
}

export default HomeStart
