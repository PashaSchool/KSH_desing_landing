import React from 'react';
import imageBg from '../../assets/images/common/noisy-residetial-bg.png';
import portfolioImage from '../../assets/images/portfolio/3_1_kartinka.png';

export default function ResidentialSection() {
    return (
        <div className={'min-h-screen p-8 relative'} style={{ backgroundImage: `url(${imageBg})` }}>
            <div className="absolute left-0 right-0 bottom-0 top-0 z-10">
                <div className="grid grid-cols-4 h-full gap-4">
                    <div className="leading-none font-thin text-white col-start-2 col-end-4 flex items-center justify-center">
                        <div style={{ fontSize: '11vw' }}>
                            <p>Private</p>
                            <p className={'-ml-10'}>Residential</p>
                            <p>Interiors</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 right-0 top-0 bottom-0">
                <div className="grid grid-cols-4 h-full">
                    <div className={'col-start-3 flex items-center justify-center'}>
                        <div
                            className={'w-full bg-no-repeat bg-center bg-cover'}
                            style={{
                                width: '100%',
                                paddingTop: '145%',
                                backgroundImage: `url(${portfolioImage})`,
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className={'absolute left-8 bottom-8 right-8 text-black flex justify-between'}>
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
