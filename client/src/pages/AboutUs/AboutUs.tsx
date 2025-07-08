import { useEffect, useRef, useState } from "react";
import { AboutUsItem, AboutUsItemTwo } from "../../api/AboutUs";

interface AboutUsProps {
    items: AboutUsItem[];
    showContent: AboutUsItemTwo[];
}

export const AboutUs = ({ items, showContent }: AboutUsProps) => {
    const [openedItemId, setOpenedItemId] = useState<number | null>(null);


    const handleItemClick = (id: number) => {
        setOpenedItemId(prevId => prevId === id ? null : id);
    };

    const handleClose = () => {
        setOpenedItemId(null);
    };

    const handleNavigation = (direction: 'prev' | 'next') => {
        if (openedItemId === null) return;

        const currentIndex = items.findIndex(item => item.id === openedItemId);
        if (currentIndex === -1) return;

        const newIndex = direction === 'prev'
            ? (currentIndex - 1 + items.length) % items.length
            : (currentIndex + 1) % items.length;

        setOpenedItemId(items[newIndex].id);
    };

    const currentContent = showContent.find(content => content.id === openedItemId);


    // В компоненте AboutUs
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setOpenedItemId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="anatomy">
            <div className="anatomy__sections">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`anatomy-section ${openedItemId === item.id ? 'active' : ''}`}
                        data-view={getViewType(item.id)}
                        onClick={() => handleItemClick(item.id)}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            {openedItemId !== null && currentContent && (
                <div className="anatomy__views">
                    <div className={`view view--${getViewType(openedItemId)}`}>
                        <div className="view__display">
                            <button
                                className="button button--close"
                                onClick={handleClose}
                            >
                                Закрыть
                            </button>
                            <h3 className="view__title">{currentContent.title}</h3>
                            <p>{currentContent.descrip}</p>
                            <div className="view__nav">
                                <button
                                    className="button button--nav button--prev"
                                    onClick={() => handleNavigation('prev')}
                                >
                                    Назад
                                </button>
                                <button
                                    className="button button--nav button--next"
                                    onClick={() => handleNavigation('next')}
                                >
                                    Вперед
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const getViewType = (id: number): string => {
    const types = ['love', 'sleep', 'hunt', 'food'];
    return types[id] || '';
};

