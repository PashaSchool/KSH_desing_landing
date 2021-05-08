import React from 'react';
import './marquee.scss';

export default function Marquee({ children }) {
    return (
        <div
            className="marquee-container"
        >
            <p
                style={{
                    fontSize: '8vw',
                    color: '#eae6dc',
                    // paddingTop: '6vh',
                  padding: '6vh 0',
                    width: '100%',
                    // 'word-spacing': '5vw',
                  'word-spacing': '1vw',
                  'text-indent'  :'1vw'
                }}
                className="marquee font-light"
            >
                {children}
            </p>

            <p
                style={{
                    fontSize: '8vw',
                    color: '#eae6dc',
                    // paddingTop: '6vh',
                  padding: '6vh 0',
                    width: '100%',
                    'word-spacing': '1vw',
                  'text-indent'  :'1vw'
                }}
                className="marquee font-light"
            >
                {children}
            </p>
        </div>
    );
}
