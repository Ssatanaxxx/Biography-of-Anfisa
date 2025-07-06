interface BurgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
    return (
        <button
            className={`burger-button ${isOpen ? 'open' : ''}`}
            onClick={onClick}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
        >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
        </button>
    );
};