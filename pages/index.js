import * as React from 'react'
import Hero from '../components/Hero'
import LearnMore from '../components/LearnMore'


export default function Index() {
    return (<>
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
