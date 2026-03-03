function Header() {
    return (
        <div className="flex justify-center">
             <ul className="flex justify-around">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
             </ul>
             <ul className="flex">
                <li>Github</li>
                <li>LinkedIn</li>
             </ul>
        </div>
    );
}

export default Header;