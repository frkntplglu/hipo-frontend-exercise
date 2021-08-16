import React from 'react'
import Logo from '../components/Logo'
import Search from '../components/Search'

function Home() {
    return (
        <div className="homepage">
            <Logo />
            <h1><strong>image</strong> search</h1>
            <Search alignment="vertical" />
        </div>
    )
}

export default Home
