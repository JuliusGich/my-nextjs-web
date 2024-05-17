import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
           <p>Welcome</p>
        </div>
            <div className="nav-links">
        <ul>
            <Link href="/">Home</Link>
            <Link href="/houses">Houses for sale</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
        </ul>
            </div>
        </nav>
    )
}