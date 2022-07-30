import * as React from 'react'
import {styled} from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Hero from '../components/Hero'
import {Grid, Paper} from '@mui/material'
import Typography from '@mui/material/Typography'

import SafetyDividerIcon from '@mui/icons-material/SafetyDivider'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))


export default function Index() {
    return (<>
        {/* Video Hero */}
        <Hero heroVideo={'/media/video/wine-garden-animation.mp4'}/>
    </>)
}
