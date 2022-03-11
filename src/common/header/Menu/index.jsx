import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { store, onToggleBurger } from 'store'
import { itemHeader } from './itemsHeader'
import ThemeSwitcher from 'common/themeSwitcher'
import Link from 'next/link'

const Menu = () => {
    const isMobile = useMediaQuery({ maxWidth: 800 })
    const { burgerIsOpen } = useSnapshot(store)

    useEffect(() => {
        // setOpen(false)
        onToggleBurger(false)
    }, [isMobile])

    return (
        <div>
            <header className="absolute flex items-center justify-around w-full p-8 header bg-gray-50 dark:bg-gray-900">
                <div className="logo">
                    <Link href="/" className="cursor-pointer">
                        <a>
                            <span className="text-lg sm:text-xl md:text-3xl">
                                <span className="hidden sm:inline-flex font-firaCode">
                                    {'->'}
                                </span>{' '}
                                Comp-Fólio{' '}
                                <span className="hidden sm:inline-flex font-firaCode">
                                    {'<-'}
                                </span>
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="z-index">
                    <nav className={`${burgerIsOpen ? 'active' : ''} nav flex`}>
                        <button
                            aria-label={
                                burgerIsOpen ? 'fechar menu' : 'abrir menu'
                            }
                            title={burgerIsOpen ? 'fechar menu' : 'abrir menu'}
                            className="btn-mobile"
                            aria-haspopup="true"
                            aria-controls="menu"
                            aria-expanded={burgerIsOpen}
                            onClick={() => onToggleBurger(!burgerIsOpen)}
                            // onClick={() => setOpen(!open)}
                        >
                            <span className="hamburger"></span>
                        </button>
                        <ul
                            className="flex items-center menu dark:bg-gray-900 bg-gray-50"
                            role="menu"
                        >
                            {itemHeader.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex justify-center"
                                        onClick={() => onToggleBurger(false)}
                                    >
                                        <Link href={item.link}>
                                            <motion.a className="p-3 text-xl font-semibold text-black duration-500 transform border-b-2 border-transparent rounded-md cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-200 dark:text-white dark:hover:text-gray-300 hover:text-gray-500">
                                                {item.itemName}
                                            </motion.a>
                                        </Link>
                                    </li>
                                )
                            })}
                            <span className="flex justify-center">
                                <ThemeSwitcher />
                            </span>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Menu
