import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    btn: {
        borderRadius: '50px',
        background: '#ffffff',
        whiteSpace: 'nowrap',
        padding: '14px 48px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '40px',
        color: '#1c1c28',
        fontSize: '16px',
        fontWeight: 800,
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s ease-in-out',
        zIndex: 5,

        '&:hover': {
            transition: 'all 0.2s ease-in-out',
            background: '#FCB362',
        }
    }
})

function Button(props) {

    const classes = useStyles();

    return (
        <>
            <button
                className={classes.btn}
                onClick={() => {
                    window.open(props.cv, '_blank')
                }}
            >
                {props.children}
            </button>
        </>
    )
}

export default Button
