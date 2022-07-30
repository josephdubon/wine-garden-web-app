import * as React from 'react'
import Typography from '@mui/material/Typography'
import Link from '../src/Link'

export default function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='/'>
                Wine Garden
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}
