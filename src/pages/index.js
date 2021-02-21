import * as React from 'react';

import Promo from '../components/Promo';
import GreetingPage from '../components/GreetingPage';
import PortfolioCarousel from '../components/PortfolioCarousel';
import Contact from '../components/Contact';
import ResidentialSection from '../components/ResidentialSection';

import Navigation from '../components/Navigation';

const IndexPage = () => {
    return (
        <main>
            <title>KSH design</title>
            {/*<GreetingPage />*/}
            <Navigation> </Navigation>
            <Promo />
            <PortfolioCarousel />
            <ResidentialSection />
            <Contact />
        </main>
    );
};

export default IndexPage;
