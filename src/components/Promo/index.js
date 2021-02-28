import React, { useRef, useEffect, useState } from 'react';
import './styles.scss';

import promoBg from '../../assets/images/common/promo.jpg';
import noisyBg from '../../assets/images/common/noisy-promo.png';

import { CSSTransition } from 'react-transition-group';

import Rectangle from '../sherable/Rectangle';

export default function Promo({children}) {
    const containerRef = useRef();
    const [isLandingLoaded, setLandingLoaded] = useState(false);

    useEffect(() => {
        // simulate loading page
        setLandingLoaded(true);
    }, []);

    return (
        <div className={'window-section relative'}>
            <CSSTransition in={isLandingLoaded} timeout={15000} classNames={'promo-section-active'}>
                <div className="promo-section__overflow-wrapper relative">
                    <div className="promo-section__background-image relative">
                        <div className="promo-section__background-image--rectangle" />

                        <div className="promo-section__noise-background" />

                        <div className="promo-section-text-information">

                            <div className="promo-section-text-information__header  font-light uppercase text-white text-2xl">
                                <div className="animated-text-block--slide-up">
                                    <p className={'text-w-regular leading-10'}  style={{
                                        fontSize: '2vh'
                                    }}>Interior Design</p>
                                </div>

                                <div className="animated-text-block--slide-up">
                                    <p className={'text-w-regular leading-10'}  style={{
                                        fontSize: '2vh'
                                    }}>Architecture</p>
                                </div>
                            </div>

                            <div className="promo-section-text-information__body">
                                <div className="animated-text-block--slide-up">
                                    <h1 className={'promo-section-logo-text font-light'} style={{
                                        textIndent: '5.5vw',

                                    }}>KSh DESIGN</h1>
                                </div>
                            </div>

                            <div className="promo-section-text-information__footer">
                                <div className="animated-text-block--slide-up">
                                    <p className={'text-2xl font-light leading-10 text-white uppercase'} style={{
                                        fontSize: '2vh'
                                    }}>Ukraine</p>
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
