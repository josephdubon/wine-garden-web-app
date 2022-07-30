import * as React from 'react'
import {styled} from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Hero from '../components/Hero'
import {Grid, Paper} from '@mui/material'
import Typography from '@mui/material/Typography'

import SafetyDividerIcon from '@mui/icons-material/SafetyDivider'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

const Item = styled(Paper)(({theme}) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#543895' : '#fff', ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))


export default function Index() {
    return (<>
        {/* Video Hero */}
        <Hero
            heroVideo={'/media/video/wine-garden-animation.mp4'}
            buttonUrl={'#learn-more'}
            buttonText={'Learn More'}
        />

        {/* First Panel */}
        <Container maxWidth='xl'>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                textAlign='center'
                paddingY='5rem'
            >
                <Grid
                    container
                    spacing={12}
                    justifyContent='center'
                    alignItems='center'
                >
                    {/* Panel 1 */}
                    <Grid id='learn-more' item xs={12} sm={4}>
                        <WorkspacePremiumIcon className='iconStyle'/>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Item>
                            <Typography variant='p' component='p'>
                                Lotteries are not new. No-loss lotteries, or prize savings accounts, are not new either.
                                WineGarden looks for the best available and safest yield farming opportunities in the
                                crypto space to bring the chance to win a big payday just by saving your tokens. There
                                are winning opportunities in bear and bull markets alike. Saving your crypto is
                                important for those times when you need access to it. That is why our contracts have
                                been audited for proper operation and security. We offer safety assurance with the
                                possibility of larger than average paydays in our no-cost lottery system.
                            </Typography>
                        </Item>
                    </Grid>

                    {/* Panel 2 */}
                    <Grid item xs={12} sm={4}>
                        <SafetyDividerIcon className='iconStyle'/>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Item>
                            <Typography variant='p' component='p'>
                                WineGarden is consistently checking for the best yield opportunities available to build
                                large pools that provide great paydays for our winners. We are also exploring bridge
                                opportunities to expand our pool offerings and bring more possibilities for wins every
                                week. Keep visiting regularly as we build new features, new pools, and get the latest
                                news on what we are doing. We may add your favorite token next!
                            </Typography>
                        </Item>
                    </Grid>

                    {/* Panel 3 */}
                    <Grid item xs={12} sm={4}>
                        <VpnLockIcon className='iconStyle'/>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Item>
                            <Typography variant='p' component='p'>
                                Our smart contract pools ensure the safety of your crypto while pooled on the dApp. All
                                winners are chosen through an algorithmic generator to provide randomness to the draws
                                without tampering. The Magnum Draw utilizes the MegaMillions draw numbers to determine a
                                winner or winners and is publicly verifiable. Randomness is assured for fair play and
                                fair winnings always.
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </>)
}
