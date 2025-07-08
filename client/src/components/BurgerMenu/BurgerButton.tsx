type BurgerButtonProps = {
    isOpen: boolean;
    onClick: () => void;
};

export const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
    return (
        <button
            className={`burger-button ${isOpen ? 'open' : ''}`}
            onClick={onClick}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
        >
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
            <span className="burger-button__line"></span>
        </button>
    );
};

export default BurgerButton;