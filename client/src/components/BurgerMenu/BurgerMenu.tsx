
interface BurgerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
    return (
        <div className={`burger-menu ${isOpen ? "open" : ""}`}>
            {/* <button
                className="burger-close"
                onClick={onClose}
                aria-label="Закрыть меню"
            >
                ×
            </button> */}
            <ul className="burger-list">
                {[
                    ["#home", "Главная"],
                    ["#about", "Обо мне"],
                    ["#skills", "Навыки"],
                    ["#blog", "Дневник"],
                    ["#gallery", "Галерея"],
                    ["#schedule", "Гости"],
                    ["#guests", "Распорядок дня"],
                    ["#contact", "Контакты"],
                    ["#miniGame", "Мини-игры"],
                ].map(([href, text]) => (
                    <li key={href}>
                        <a href={href} onClick={onClose}>{text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};