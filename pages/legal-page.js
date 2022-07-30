import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TermsOfUseAndService from '../src/TermsOfUseAndService'
import Link from '../src/Link'
import Copyright from '../src/Copyright'

export default function LegalPage() {
    return (
        <Container maxWidth='md'>
            <Box sx={{my: 4}}>
                <Typography variant='h4' component='h1' gutterBottom>
                    Wine Garden Legal Page
                </Typography>

                <Button variant='contained' component={Link} noLinkStyle href='/'>
                    Go to the main page
                </Button>
                <TermsOfUseAndService/>
            </Box>
        </Container>
    )
}
