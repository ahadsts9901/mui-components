import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlert(props) {
  return (
    <Stack sx={{ width: '250px' }} spacing={2}>
      <Alert severity={props.icon}>{props.message}</Alert>
    </Stack>
  );
}