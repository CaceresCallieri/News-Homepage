import { useState, useEffect } from 'react'

import Links from './Links'

import Logo from '../assets/logo.svg?react'
import OpenMenuIcon from '../assets/icon-menu.svg?react'
import CloseMenuIcon from '../assets/icon-menu-close.svg?react'

const Header = () => {
    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(!modal)
    }

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [modal])

    //On scroll
    useEffect(() => {
        function handleScroll() {
            const header = document.querySelector("header")
            header?.classList.toggle("sticky", window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <header>
            <div className="logo">
                <Logo />
            </div>

            {/* Mobile Menu */}
            <button onClick={toggleModal}>
                {modal ? <CloseMenuIcon /> : <OpenMenuIcon />}
            </button>

            {/* Modal */}
            {modal && (
                <div className='modal'>
                    <div className="overlay" onClick={toggleModal}>
                        <ul className={`links-mobile`}>
                            <Links />
                        </ul>
                    </div>
                </div>
            )}

            {/* Desktop Menu */}
            <ul className="links-desktop">
                <Links />
            </ul>
        </header>
    )
}

export default Header 