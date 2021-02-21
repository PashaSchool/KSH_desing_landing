import React from 'react'

export default function Navigation({children}) {
    return (
        <div>
            <nav className={'uppercase text-white fixed top-0 right-0 z-20 text-xl mt-12 mr-8 font-light  leading-10'}>
                <ul className={'flex menu-item '} style={{

                    textShadow: "0 0 1px #000"
                }}>
                    <li className={'mx-4'}><a href="/">Projects</a></li>
                    <li className={'mx-4'}><a href="/">INFORMATION</a></li>
                    <li className={'ml-4'}><a href="/">Contact</a></li>
                </ul>
            </nav>

        </div>
    )
}