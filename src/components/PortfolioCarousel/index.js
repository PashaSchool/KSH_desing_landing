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
                // width: '45%',
                width: '50vw',
                height: '100%',
                margin: '0 5vw'
                // padding: '0 1vw'
            }}
        >
            <div
                className={'h-full bg-center bg-cover bg-no-repeat'}
                style={{ backgroundImage: `url(${src})`, width: '28vw' }}
                // style={{ backgroundImage: `url(${src})`, width: '80%' }}
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
                    className={'font-light '}
                    style={{
                        fontSize: '8vw',
                        color: '#eae6dc',
                        transform: 'translateX(-7vw)',
                        paddingTop: '6vh',
                        'word-spacing': '10vw',
                    }}
                >
                    COMMERCIAL INTERIORS
                </p>
            </div>

            <div
                style={{
                    height: '15vh',
                }}
            />

            <div className="">
                <div
                    className="w-full h-full flex"
                    style={{
                        width: '150vw',
                        height: '70vh',
                        transform: 'translateX(-18vw)'
                    }}
                >
                    <ImageHolder src={image1} />
                    <ImageHolder src={image2} />
                    <ImageHolder src={image3} />
                </div>
            </div>

            <div className={'grid'}
                style={{
                    height: '15vh',
                    padding: '4vh 5rem'
                }}
            >
                <div
                    className={'text-black flex justify-between items-center px-4 text-2xl'}
                    style={{
                        color: '#eae6dc',
                    fontSize: '2vh'
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
