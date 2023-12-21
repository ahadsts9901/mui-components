import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField(props) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField type={props.type} id="outlined-basic" label={props.label} variant="outlined" />
        </Box>
    );
}