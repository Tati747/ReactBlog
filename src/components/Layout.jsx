import { Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'

// Layout - компонент отражающий содержимое страницы
// Outlet - компонент для динамического контента
export const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <main className="container">
                <Outlet />

            </main>

            <footer className="footer"><p className='footer__text'>&copy; ReactRouter 2022</p></footer>
        </>
    )
}