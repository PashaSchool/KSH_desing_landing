import React from 'react';
import imageBg from '../../assets/images/common/noisy-residetial-bg.png';
import portfolioImage from '../../assets/images/portfolio/3_1_kartinka.png';

export default function ResidentialSection() {
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
                            <div className={'flex items-center justify-center'} style={{
                                width: '28vw',
                                marginLeft: '55vw'
                            }}>
                                <div
                                    className={'w-full bg-no-repeat bg-center bg-cover'}
                                    style={{
                                        width: '100%',
                                        paddingTop: '137%',
                                        backgroundImage: `url(${portfolioImage})`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-full relative z-20">
                        <div className="leading-none font-thin text-white   items-center justify-center" style={{
                            marginTop: '7vh'
                        }}>
                            <div style={{ fontSize: '11vw' }} className={''}>
                                <p style={{
                                    marginLeft: '36vw'
                                }}>Private</p>
                                <p className={'-ml-10' } style={{
                                    marginLeft: '7vw'
                                }}>Residential</p>
                                <p style={{
                                    marginLeft: '43vw'
                                }}>Interiors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={'text-black flex justify-between text-2xl p-16'}
                style={{
                    height: '15vh',
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
