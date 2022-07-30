import * as React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import LearnMore from '../components/LearnMore'


export default function Index() {
    return (<>
        <Head>
            <title>Wine Garden</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
        </Head>

        {/* Video Hero */}
        <Hero
            heroVideo={'/media/video/wine-garden-animation.mp4'}
            buttonUrl={'#learn-more'}
            buttonText={'Learn More'}
        />

        {/* Learn More */}
        <LearnMore/>

    </>)
}
