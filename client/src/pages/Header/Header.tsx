import { useState } from "react";
import { BurgerButton } from "../../components/BurgerMenu/BurgerButton";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="header-block header">
            <div className="burger-container">
                <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
                <BurgerMenu isOpen={isOpen} onClose={toggleMenu} />
            </div>
        </div>
    )
}

export default Header;