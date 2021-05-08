import './styles.scss';
import React, { useRef } from 'react';

import Rectangle from '../../sherable/Rectangle';

const Footer = () => (
    <footer
        style={{
            height: '15vh',
            padding: '4vh 5rem',
        }}
        className={'relative z-10 font-light leading-10 text-white text-opacity-80 flex justify-between p-8 text-2xl'}
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
);

function Geeting() {
    return (
        <div
            style={{
                height: '70vh',
            }}
            className={'relative z-10 flex-grow flex items-center justify-center'}
        >
            <p
                data-scroll
                data-scroll-speed={'-1.8'}
                className={'uppercase text-9xl font-light text-white text-opacity-80'}
                style={{
                    fontSize: '9vw',
                    marginTop: '5vh',
                    letterSpacing: '2px',
                }}
            >
                CONTACT US
            </p>
        </div>
    );
}

export default function ContactUs({ bgImageSource, bgNoiseImageSource }) {
    const containerRef = useRef();

    return (
        <div
            className={'relative h-screen overflow-hidden contact-us'}
            data-scroll-repeat
            data-scroll
            ref={containerRef}
            data-scroll-offset={'75%, 25%'}
        >
            <div
                className={'absolute left-0 right-0 bottom-0 top-0 bg-cover bg-center contact-us__background-image'}
                style={{
                    backgroundImage: `url(${bgImageSource})`,
                }}
            />
            <div
                className="absolute left-0 right-0 bottom-0 top-0 bg-cover bg-center contact-us__noise-image"
                style={{
                    backgroundImage: `url(${bgNoiseImageSource})`,
                }}
            />

            <div className="absolute left-0 right-0 bottom-0 top-0 contact-us__clip-path-image">
                <Rectangle imgUrl={bgImageSource} containerRef={containerRef.current} />
            </div>
            <div
                style={{
                    height: '15vh',
                }}
            />
            <Geeting />
            <Footer />
        </div>
    );
}
