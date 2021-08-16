import React from 'react'
import Logo from './Logo'
import Search from './Search'

function Header() {
    return (
        <header className="header">
            <Logo />
            <Search alignment="horizontal" />
        </header>
    )
}

export default Header
