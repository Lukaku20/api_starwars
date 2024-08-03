import React from 'react';

function Header() {
    return(
    <div className="App">
        <header className="header">
        <img src="starwars_portada.png" className="header-img" alt="logo" />
        </header>
        <nav className='nav'>
            <ul className='nav'>
                <li><a href="#" className='nav'>Planetas</a></li>
                <li><a href="#" className='nav'>Personajes</a></li>
                <li><a href="#" className='nav'>Species</a></li>
            </ul>
        </nav>
    </div>
    )
}
export default Header;