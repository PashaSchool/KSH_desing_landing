import React, { useRef, useEffect, useState } from 'react';
import Layout from '../components/layout';

import noisyBg from '../assets/images/common/noisy-portfolio-bg.png';

import image1 from '../assets/images/portfolio/2_1_kartinka.jpg';
import image2 from '../assets/images/portfolio/2_2_kartinka.jpg';
import image3 from '../assets/images/portfolio/2_3_kartinka.jpg';

import imageBg from '../assets/images/common/noisy-residetial-bg.png';
import portfolioImage from '../assets/images/portfolio/3_1_kartinka.png';

import bgImage from '../assets/images/common/contact-bg.png';
import bgTransparent from '../assets/images/common/contact-bg-transparent.png';
import Rectangle from '../sherable/Rectangle';

import { CSSTransition } from 'react-transition-group';

import Marquee from '../components/marquee.js'

function Navigation(props) {
    return (
        <div data-scroll data-scroll-sticky data-scroll-target={'#layout-container'} className={'relative z-20'}>
            <nav className={'uppercase text-white fixed top-0 right-0 text-2xl mt-20 mr-8 font-light  leading-10'}>
                <ul
                    className={'flex menu-item '}
                    style={{
                        textShadow: '0 0 1px #000',
                        fontSize: '2.4vh',
                    }}
                >
                    <li className={'ml-12'}>
                        <a href="/">Projects</a>
                    </li>
                    <li className={'ml-12'}>
                        <a href="/">INFORMATION</a>
                    </li>
                    <li className={'ml-12'}>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

function enableScrollOnEntered() {
    if (typeof window !== 'undefined') {
        setTimeout(() => {
            window.scroll.update();
            window.scroll.start();
        });
    }
}

function Promo({ children }) {
    const [isLandingLoaded, setLandingLoaded] = useState(false);

    useEffect(() => {
        // simulate loading page
        setLandingLoaded(true);
    }, []);

    return (
        <div
            className={'window-section relative'}
            data-scroll
            data-scroll-repeat
            data-scroll-class={'zoom-in-transform'}
            data-scroll-offset={'40, 50%'}
        >
            <CSSTransition
                in={isLandingLoaded}
                timeout={3500}
                classNames={'promo-section-active'}
                onEntered={enableScrollOnEntered}
            >
                <div className="promo-section__overflow-wrapper relative">
                {children}
                    <div className="promo-section__background-image relative">
                        <div className="promo-section__background-image--rectangle" />

                        <div className="promo-section__noise-background" />

                        <div className="promo-section-text-information">
                            <div className="promo-section-text-information__header  font-light uppercase text-white text-2xl">
                                <div className="animated-text-block--slide-up">
                                    <p
                                        className={'text-w-regular leading-10'}
                                        style={{
                                            fontSize: '2vh',
                                        }}
                                    >
                                        Interior Design
                                    </p>
                                </div>

                                <div className="animated-text-block--slide-up">
                                    <p
                                        className={'text-w-regular leading-10'}
                                        style={{
                                            fontSize: '2vh',
                                        }}
                                    >
                                        Architecture
                                    </p>
                                </div>
                            </div>

                            <div className="promo-section-text-information__body">
                                <div className="animated-text-block--slide-up">
                                    <h1
                                        className={'promo-section-logo-text font-light ff'}
                                        style={{
                                            textIndent: '5.5vw',
                                        }}
                                    >
                                        KSh DESIGN
                                    </h1>
                                </div>
                            </div>

                            <div className="promo-section-text-information__footer">
                                <div className="animated-text-block--slide-up">
                                    <p
                                        className={'text-2xl font-light leading-10 text-white uppercase'}
                                        style={{
                                            fontSize: '2vh',
                                        }}
                                    >
                                        Ukraine
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="promo-section__background-image__initial-ellipse" />
                        <div className="promo-section__initial-logo-screen" />
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

function Contact() {
    const containerRef = useRef();
    return (
        <div
            className={'relative h-screen contact-us-section overflow-hidden'}
            data-scroll-repeat
            data-scroll
            ref={containerRef}
            data-scroll-offset={'75%, 25%'}
        >
            <div
                className={'absolute left-0 right-0 bottom-0 top-0 bg-cover bg-center contact-us-bg-image'}
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
            ></div>
            <div
                className="absolute left-0 right-0 bottom-0 top-0 bg-cover bg-center "
                style={{
                    backgroundImage: `url(${bgTransparent})`,
                }}
            >
                <div
                    style={{
                        height: '15vh',
                    }}
                ></div>

                <div
                    style={{
                        height: '70vh',
                    }}
                    className={'relative z-10 flex-grow flex items-center justify-center'}
                >
                    <p
                        data-scroll
                        data-scroll-speed={'-1.8'}
                        className={'uppercase text-9xl font-light text-white'}
                        style={{
                            fontSize: '9vw',
                            marginTop: '5vh',
                            letterSpacing: '2px',
                        }}
                    >
                        CONTACT US
                    </p>
                </div>

                <footer
                    style={{
                        height: '15vh',
                        padding: '4vh 5rem',
                    }}
                    className={
                        'relative z-10 font-light leading-10 text-white-darken flex justify-between p-8 text-2xl'
                    }
                    style={{
                        fontSize: '2vh',
                    }}
                >
                    <div className={'flex'}>
                        <p className={'mr-28'}>KSh DESIGN</p>
                        <p>
                            <a href="https://instagram.com" target={'_blank'}>
                                Instagram
                            </a>
                        </p>
                    </div>
                    <div className={'flex'}>
                        <p className={'mr-10'}>
                            <a href="tel:+380660177097">Tel: +380660177097</a>
                        </p>
                        <p className={''}>
                            <a href="mailto:kshofficedesign@gmail.com">kshofficedesign@gmail.com</a>
                        </p>
                    </div>
                </footer>

                <div className="absolute left-0 right-0 bottom-0 top-0">
                    <Rectangle imgUrl={bgImage} containerRef={containerRef.current} />
                </div>
            </div>
        </div>
    );
}

function ResidentialSection(props) {
    return (
        <div className={'min-h-screen relative'} style={{ backgroundImage: `url(${imageBg})` }}>
            <div
                style={{
                    height: '15vh',
                }}
            ></div>
            <div
                className="relative"
                style={{
                    height: '70vh',
                }}
            >
                <div className="absolute left-0 right-0 bottom-0 top-0 z-10">
                    <div className="absolute left-0 right-0 top-0 bottom-0">
                        <div className="h-full">
                            <div
                                className={'flex items-center justify-center relative'}
                                style={{
                                    width: '28vw',
                                    marginLeft: '55vw',
                                }}
                            >
                                <div
                                    className="w-full absolute left-0 top-0 overflow-hidden"
                                    style={{
                                        paddingTop: '137%',
                                    }}
                                >
                                    <div
                                        data-scroll
                                        data-scroll-speed={'-1'}
                                        className={'w-full bg-no-repeat bg-center bg-cover absolute left-0 top-0'}
                                        style={{
                                            width: '100%',
                                            // paddingTop: '137%',
                                            paddingTop: '170%',
                                            backgroundImage: `url(${portfolioImage})`,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-full relative z-20">
                        <div
                            className="leading-none font-thin text-white   items-center justify-center"
                            style={{
                                marginTop: '7vh',
                            }}
                        >
                            <div style={{ fontSize: '11vw' }}>
                                <p
                                    data-scroll
                                    data-scroll-speed={'-0.4'}
                                    data-scroll-direction={'horizontal'}
                                    data-scroll-repeat
                                    style={{
                                        marginLeft: '36vw',
                                    }}
                                >
                                    Private
                                </p>
                                <p
                                    data-scroll
                                    data-scroll-speed={'0.8'}
                                    data-scroll-direction={'horizontal'}
                                    data-scroll-repeat
                                    className={'-ml-10'}
                                    style={{
                                        marginLeft: '7vw',
                                    }}
                                >
                                    Residential
                                </p>
                                <p
                                    data-scroll
                                    data-scroll-speed={'-1.2'}
                                    data-scroll-direction={'horizontal'}
                                    data-scroll-repeat
                                    style={{
                                        marginLeft: '43vw',
                                    }}
                                >
                                    Interiors
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={'text-black flex justify-between text-2xl p-16'}
                style={{
                    height: '15vh',
                    fontSize: '2vh',
                }}
            >
                <div className={'text-black-300'}>
                    <p>KSh DESIGN</p>
                </div>
                <div className={'text-black-300'}>
                    <p>SEE ALL</p>
                </div>
            </div>
        </div>
    );
}

function ImageHolder({ src }) {
    return (
        <div
            className={'flex justify-start h-full relative'}
            style={{
                width: '50vw',
                margin: '0 5vw',
            }}
        >
            <div className={'absolute left-0 top-0 h-full w-full z-30 overflow-hidden'}>
                <div
                    data-scroll
                    data-scroll-speed={'-1'}
                    className={'h-full bg-center bg-cover bg-no-repeat relative'}
                    style={{ backgroundImage: `url(${src})`, width: '28vw', height: '110%' }}
                />
            </div>
        </div>
    );
}

function PortfolioCarousel() {
    return (
        <div
            className={'min-h-screen relative overflow-hidden'}
            style={{
                backgroundImage: `url(${noisyBg})`,
            }}
        >
            <div
                // data-scroll
                // data-scroll-repeat
                // data-scroll-direction={'horizontal'}
                // data-scroll-speed={'2'}
                className="absolute left-0 right-0 bottom-0 top-0 whitespace-nowrap flex items-center justify-center z-10"
            >

              <Marquee>
                COMMERCIAL INTERIORS
              </Marquee>

            </div>

            <div
                style={{
                    height: '15vh',
                }}
            />

            <div data-scroll data-scroll-speed={'1'} data-scroll-direction={'horizontal'}>
                <div
                    className="w-full h-full flex"
                    style={{
                        width: '150vw',
                        height: '70vh',
                        transform: 'translateX(-18vw)',
                    }}
                >
                    <ImageHolder src={image1} />
                    <ImageHolder src={image2} />
                    <ImageHolder src={image3} />
                </div>
            </div>

            <div
                className={'grid'}
                style={{
                    height: '15vh',
                    padding: '4vh 5rem',
                }}
            >
                <div
                    className={'text-black flex justify-between items-center px-4 text-2xl'}
                    style={{
                        color: '#eae6dc',
                        fontSize: '2vh',
                    }}
                >
                    <div>
                        <p>KSh DESIGN</p>
                    </div>
                    <div>
                        <p>SEE ALL</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const IndexPage = () => (
    <Layout>
        {/*<div className={'h-screen bg-red-800'}>*/}
        {/*    <div className={'flex justify-center items-center h-full'}>*/}
        {/*        <h5 className={'text-black-900'}>Super title 8</h5>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div id={'layout-container'} className={'relative z-10'}>
            {/*<Promo>*/}
            {/*    <Navigation />*/}
            {/*</Promo>*/}

            {/*<PortfolioCarousel />*/}
            {/*<ResidentialSection />*/}

            <Contact />
        </div>
    </Layout>
);

export default IndexPage;
