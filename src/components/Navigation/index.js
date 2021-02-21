import React from 'react'

export default function Navigation({children}) {
    return (
        <div className={''}>
            <nav className={'uppercase fixed top-0 right-0 text-white z-10 text-xl mt-12 mr-8 font-light  leading-10'}>
                <ul className={'flex menu-item'}>
                    <li className={'mx-4'}><a href="/">Projects</a></li>
                    <li className={'mx-4'}><a href="/">INFORMATION</a></li>
                    <li className={'ml-4'}><a href="/">Contact</a></li>
                </ul>
            </nav>

            {children}
        </div>
    )
}