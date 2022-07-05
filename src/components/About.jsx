import { Outlet, Link } from 'react-router-dom'


export const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Some Information</p>
            <ul>
                <li><Link to='contacts'>Our Contacts</Link></li>
                <li><Link to='team'>Our Team</Link></li>
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    )
}