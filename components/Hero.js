import {makeStyles} from '@material-ui/core/styles'
import ReactPlayer from 'react-player'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Container from '@mui/material/Container'
import Link from '../src/Link'


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '80vh',
        position: 'relative',
        '& video': {
            objectFit: 'cover',
        },
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    introText: {
        lineHeight: '32px',
        paddingBottom: theme.spacing(4),
    },
}))
export default function Hero({heroVideo, buttonText, buttonUrl}) {
    const classes = useStyles()

    return (<>
        <section className={classes.root}>
            <ReactPlayer
                url={heroVideo}
                playing
                loop
                muted
                width='100%'
                height='100%'
            />
            <div className={classes.overlay}>
                <Box
                    height='100%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    color='#fff'
                    textAlign='center'
                >
                    <Container maxWidth={'md'}>
                        {/* Logo */}
                        <Image src={'/media/branding/wine-garden-logo.svg'} width={800} height={300}/>

                        {/* Hero Intro */}
                        <Typography variant='p' component='p' className={classes.title}>
                            WineGarden is a decentralized, DAO governed dApp built on the Cardano blockchain. We offer a
                            no-cost lottery that allows for regular winnings to be distributed automatically from
                            multiple
                            token and coin pools. DAO governance gives token holders the opportunity to democratically
                            enact
                            changes through vote to create exciting new variations in the no cost lottery system while
                            maintaining a self-sustaining business model.
                        </Typography>

                        {/* Learn More Button */}
                        <Button color='primary' variant='outlined' size='large'>
                            <Link href={'#learn-more'}>
                                Learn More
                            </Link>
                        </Button>
                    </Container>
                </Box>
            </div>
        </section>
    </>)
}