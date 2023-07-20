import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    divider: {
        height: '10px',
        backgroundColor: '#ffffff',
        marginBottom: '60px',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '20px',
    }
})


function CustomDivider() {

    const classes = useStyles()

    return (
        <>
            <Divider className={classes.divider} />
        </>
    )
}

export default CustomDivider
