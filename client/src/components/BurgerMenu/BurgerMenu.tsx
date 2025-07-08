interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
  const menuItems = [
    { id: 1, text: "Главная", href: "#home" },
    { id: 2, text: "Обо мне", href: "#about" },
    { id: 3, text: "Навыки", href: "#skills" },
    { id: 4, text: "Дневник", href: "#blog" },
    { id: 5, text: "Галерея", href: "#gallery" },
    { id: 6, text: "Гости", href: "#guests" },
    { id: 7, text: "Распорядок дня", href: "#schedule" },
    { id: 8, text: "Контакты", href: "#contact" },
    { id: 9, text: "Мини-игры", href: "#miniGame" }
  ];

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-menu__content">
        <ul className="burger-menu__list">
          {menuItems.map((item, index) => (
            <li
              className="burger-menu__item"
              key={item.id}
              style={{
                animationDelay: isOpen ? `${index * 0.1}s` : '0s',
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)'
              }}
            >
              <a className="burger-menu__link" href={item.href} onClick={onClose}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};