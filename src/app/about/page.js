'use client'

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

import { FullFileBrowser } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';

// import dynamic from "next/dynamic";

// const FullFileBrowser = dynamic(
//   () => import("@aperturerobotics/chonky").then((mod) => mod.FullFileBrowser),
//   { ssr: false }
// );

// const ChonkyIconFA = dynamic(
//   () =>
//     import("@aperturerobotics/chonky-icon-fontawesome").then(
//       (mod) => mod.ChonkyIconFA
//     ),
//   { ssr: false }
// );

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <FullFileBrowser
          files={[]}
          iconComponent={ChonkyIconFA}
        />
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
