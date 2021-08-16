import Logo from './Logo'
import Search from './Search'

function Header() {

    return (
        <header className="header">
            <Logo />
            <h1 className="mobile-title">
                <strong>image</strong> search
            </h1>
            <Search alignment="horizontal" />
        </header>
    )
}

export default Header
