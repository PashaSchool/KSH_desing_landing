import React from 'react';

import imageLogo from '../../assets/images/logo/logo.png';

export default function GreetingPage() {
    return (
        <div className={'h-screen bg-white'}>
            <div
                className={'h-full bg-center'}
                style={{
                    backgroundImage: `url(${imageLogo})`,
                }}
            ></div>
        </div>
    );
}
