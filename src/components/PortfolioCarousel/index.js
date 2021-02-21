import React from 'react';

import noisyBg from '../../assets/images/common/noisy-portfolio-bg.png';

import image1 from '../../assets/images/portfolio/2_1_kartinka.jpg';
import image2 from '../../assets/images/portfolio/2_2_kartinka.jpg';
import image3 from '../../assets/images/portfolio/2_3_kartinka.jpg';

function ImageHolder({ src }) {
    return (
        <div
            className={'flex justify-start'}
            style={{
                width: '45%',
                height: '100%',
            }}
        >
            <div
                className={'w-1/2 h-full bg-center bg-cover bg-no-repeat'}
                style={{ backgroundImage: `url(${src})` }}
            />
        </div>
    );
}

export default function PortfolioCarousel() {
    return (
        <div
            className={'min-h-screen relative overflow-hidden'}
            style={{
                backgroundImage: `url(${noisyBg})`,
            }}
        >
            <div className="absolute left-0 right-0 bottom-0 top-0 whitespace-nowrap flex items-center justify-center z-10">
                <p
                    className={'font-light'}
                    style={{ fontSize: '9vw', color: '#eae6dc', transform: 'translateX(-10vw)' }}
                >
                    COMMERCIAL INTERIORS
                </p>
            </div>

            <div className="absolute left-0 right-0 bottom-12 top-12 py-12">
                <div
                    className="w-full h-full flex"
                    style={{
                        width: '135%',
                    }}
                >
                    <ImageHolder src={image1} />
                    <ImageHolder src={image2} />
                    <ImageHolder src={image3} />
                </div>
            </div>

            <div
                className={'absolute left-8 bottom-8 right-8 text-black flex justify-between'}
                style={{
                    color: '#eae6dc',
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
    );
}
