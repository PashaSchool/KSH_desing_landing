import React, { useRef } from 'react';

import bgImage from '../../assets/images/common/contact-bg.png';
import bgTransparent from '../../assets/images/common/contact-bg-transparent.png';
import Rectangle from '../sherable/Rectangle';

export default function Contact() {
    const containerRef = useRef();
    return (
        <div
            ref={containerRef}
            className={'h-screen bg-cover bg-center relative flex flex-col '}
            style={{
                backgroundImage: `url(${bgTransparent}), url(${bgImage})`,
            }}
        >
            <div style={{
                height: '15vh'
            }}></div>

            <div  style={{
                height: '70vh'
            }} className={'relative z-10 flex-grow flex items-center justify-center'}>
                <p className={'uppercase text-9xl font-light text-white'} style={{
                    fontSize: '9vw',
                    marginTop: '5vh',
                    letterSpacing: '2px'
                }}>CONTACT US</p>
            </div>

            <footer  style={{
                height: '15vh',
                padding: '4vh 5rem'
            }} className={'relative z-10 font-light leading-10 text-white-darken flex justify-between p-8 text-2xl'}>
                <div className={'flex'}>
                    <p className={'mr-28'}>KSh DESIGN</p>
                    <p>Instagram</p>
                </div>
                <div className={'flex'}>
                    <p className={'mr-10'}>Tel: +380660177097</p>
                    <p className={''}>kshofficedesign@gmail.com</p>
                </div>
            </footer>


            <div className="absolute left-0 right-0 bottom-0 top-0">
                <Rectangle imgUrl={bgImage} containerRef={containerRef.current} />
            </div>
        </div>
    );
}
