import { useState } from 'react';
// Импортируем изображения напрямую
import cat1 from '../../assets/image/cat1.jpg';
import cat2 from '../../assets/image/cat2.jpg';
import cat5 from '../../assets/image/cat5.jpg';
import cat7 from '../../assets/image/cat7.jpg';
import cat8 from '../../assets/image/cat8.jpg';
import cat9 from '../../assets/image/cat9.jpg';

export const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleryItems = [
        {
            id: 1,
            imageUrl: cat1,
            caption: '"Меня любят"'
        },
        {
            id: 2,
            imageUrl: cat5,
            caption: '"Шо тут у нас?"'
        },
        {
            id: 3,
            imageUrl: cat7,
            caption: '"Послеобеденный сон"'
        },
        {
            id: 4,
            imageUrl: cat2,
            caption: '"Охотничья поза"'
        },
        {
            id: 5,
            imageUrl: cat9,
            caption: '"Чуть-чуть грации не помешает"'
        },
        {
            id: 6,
            imageUrl: cat8,
            caption: '"Выгуливаю человека"'
        }
    ];

    const handlePrev = () => {
        setCurrentIndex(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1));
    };

    // Показываем только текущее изображение (для карусели)
    const currentItem = galleryItems[currentIndex];

    return (
        <>
            {/* <span className='gallery-back'>🐈</span> */}
            {/* <span className='gallery-back'>🐈</span> */}
            {/* <span className='gallery-back'>🐈</span> */}
            {/* <span className='gallery-back'>🐈</span> */}
            {/* <span className='gallery-back'>🐈</span> */}
            <div className="gallery-container">
                <div className="decorative-paw paw-left">🐾</div>
                <div className="decorative-paw paw-right">🐾</div>
                <h2 className="section-title">Фотосессии</h2>
                <p className="section-subtitle">Мои лучшие моменты в объективе</p>

                {/* Вариант 1: Карусель (показывает одно изображение) */}
                <div className="gallery-carousel">
                    <div
                        className="gallery-item"
                        style={{ backgroundImage: `url(${currentItem.imageUrl})` }}
                    >
                        <div className="gallery-caption">{currentItem.caption}</div>
                    </div>
                </div>

                {/* Вариант 2: Сетка (показывает все изображения) */}
                {/* <div className="gallery-grid">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className="gallery-item"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                    >
                        <div className="gallery-caption">{item.caption}</div>
                    </div>
                ))}
            </div> */}

                <div className="gallery-controls">
                    <button
                        className="gallery-button gallery-prev"
                        onClick={handlePrev}
                        aria-label="Previous photo"
                    >
                        ◀
                    </button>
                    <span className="gallery-counter">
                        {currentIndex + 1} / {galleryItems.length}
                    </span>
                    <button
                        className="gallery-button gallery-next"
                        onClick={handleNext}
                        aria-label="Next photo"
                    >
                        ►
                    </button>
                </div>
                <div className="decorative-paw paw-left">🐾</div>
                <div className="decorative-paw paw-right">🐾</div>
            </div>
            {/* <span className='gallery-back'>🐈</span> */}
            {/* <span className='gallery-back'>🐈</span> */}
            {/* <span className='gallery-back'>🐈</span> */}
            {/* <span className='gallery-back'>🐈</span> */}

        </>
    );
};