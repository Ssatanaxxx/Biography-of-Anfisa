import { useState } from "react";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";
import { BurgerButton } from "../../components/BurgerMenu/BurgerButton";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="header-container">
            <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
            <BurgerMenu isOpen={isOpen} onClose={toggleMenu} />

            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link nav__link--home" href="#home">Главная</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#about">Обо мне</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#skills">Навыки</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#blog">Дневник</a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link" href="#gallery">Галерея</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#guests">Гости</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#schedule">Распорядок дня</a>
                    </li>
                    <li className="nav__item">
                        <a className="nav__link" href="#contact">Контакты</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};