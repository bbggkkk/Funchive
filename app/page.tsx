"use client"

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputLabel, OutlinedInput, Typography } from '@mui/material';
import React from 'react';

export default function Page() {
    return (
      <main>
        <Typography variant='h2' component='h1'>Funchive</Typography>
        <FormControl variant="outlined">
          <InputLabel htmlFor="input-client-id">Client ID</InputLabel>
          <OutlinedInput id="input-client-id" endAdornment={<IconButton edge="end"><Visibility/></IconButton>}/>
        </FormControl>
      </main>
    );
  }