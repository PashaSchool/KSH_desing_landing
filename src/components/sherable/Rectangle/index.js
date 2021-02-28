import React from "react";

export default function Rectangle({ imgUrl, containerRef, className='' }) {
    const [size, setSize] = React.useState('0px, 0px, 0px, 0px');

    React.useEffect(() => {
        if (window) {
            handleUpdateRect();

            window.addEventListener('resize', handleUpdateRect);
        }
    }, []);

    function handleUpdateRect() {
        if (containerRef) {
            const { width, height } = containerRef.getBoundingClientRect();
            const [posY, posX] = [height / 2, width / 2];

            setSize(`${posY}px, ${height}px, ${width}px, ${posX}px`);
        }
    }

    return (
        <div
            className={`w-full h-full bg-cover bg-no-repeat bg-center ${className}`}
            style={{
                'clip-path': 'inset(17% 36% 17% 36%)',
                clip: `rect(${size})`,
                backgroundImage: `url(${imgUrl})`,
            }}
        ></div>
    );
}