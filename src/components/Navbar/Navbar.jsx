import { useState } from "react";
import "./Navbar.css";
import { FaTelegramPlane, FaViber, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Digital<span>Market</span></div>

            {/* Бургер */}
            <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Навигация */}
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                <li>Кейсы</li>
                <li>Услуги</li>
                <li>Процесс</li>
                <li>Сотрудничество</li>
                <li>FAQ</li>
            </ul>

            <div className="socials">
                <a href="#"><FaTelegramPlane /></a>
                <a href="#"><FaViber /></a>
            </div>
        </nav>
    );
}
