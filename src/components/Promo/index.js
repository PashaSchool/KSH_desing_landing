import React, { useRef, useEffect, useState } from 'react';
import './styles.scss';

import promoBg from '../../assets/images/common/promo.jpg';
import noisyBg from '../../assets/images/common/noisy-promo.png';

import { CSSTransition } from 'react-transition-group';

import Rectangle from '../sherable/Rectangle';

export default function Promo(props) {
    const containerRef = useRef();
    const [isLandingLoaded, setLandingLoaded] = useState(false);

    useEffect(() => {
        // simulate loading page
        setLandingLoaded(true);
    }, []);

    return (
        <div className={'window-section'}>
            <CSSTransition in={isLandingLoaded} timeout={15000} classNames={'promo-section-active'}>
                <div className="promo-section__overflow-wrapper relative">
                    <div className="promo-section__background-image relative">
                        <div className="promo-section__background-image--rectangle" />

                        <div className="promo-section__noise-background" />

                        <div className="promo-section-text-information">

                            <div className="promo-section-text-information__header  font-light uppercase text-white ">
                                <div className="animated-text-block--slide-up">
                                    <p className={'text-sz-normal text-w-regular leading-10'}>Interior Design</p>
                                </div>

                                <div className="animated-text-block--slide-up">
                                    <p className={'text-sz-normal text-w-regular leading-10'}>Architecture</p>
                                </div>
                            </div>

                            <div className="promo-section-text-information__body">
                                <div className="animated-text-block--slide-up">
                                    <h1 className={'promo-section-logo-text font-light'}>KSh DESIGN</h1>
                                </div>
                            </div>

                            <div className="promo-section-text-information__footer">
                                <div className="animated-text-block--slide-up">
                                    <p className={'text-sz-normal font-light leading-10 text-white uppercase'}>Ukraine</p>
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
