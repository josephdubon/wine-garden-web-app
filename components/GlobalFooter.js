import Box from '@mui/material/Box'
import {Grid} from '@mui/material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Image from 'next/image'
import Link from '../src/Link'
import Copyright from '../src/Copyright'

export default function GlobalFooter() {
    return (<>
        <Container maxWidth='xl'>
            <Box
                display='flex'
                flexDirection='row'
                textAlign='center'
                marginY='.5rem'
            >
                <Grid
                    container
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid id='learn-more' item xs={4}>
                        <Link href={'/'}>
                            <a>
                                <Image src={'/media/branding/wine-garden-logo.svg'} height={25} width={100}/>
                            </a>
                        </Link>
                    </Grid>

                    <Grid item xs={4}>
                        <Copyright/>
                    </Grid><

                    Grid item xs={4}>
                    <Typography variant='small' component='small'>
                        <Link href={'/legal-page'}>
                            <a>
                                Legal Page
                            </a>
                        </Link>
                    </Typography>
                </Grid>
                </Grid>
            </Box>
        </Container>    </>)
}