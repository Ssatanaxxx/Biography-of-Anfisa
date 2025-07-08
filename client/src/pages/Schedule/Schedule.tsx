import { useState } from 'react';

export const Schedule = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const scheduleItems = [
        {
            time: "6:00",
            title: "Будильник для хозяев",
            description: "Тщательно вылизываю лицо хозяина, чтобы разбудить его на работу",
            icon: "⏰",
            color: "#FFD166"
        },
        {
            time: "6:30",
            title: "Завтрак",
            description: "Требую еду, даже если в миске еще есть корм",
            icon: "🍽️",
            color: "#06D6A0"
        },
        {
            time: "7:00-15:00",
            title: "Дневной сон",
            description: "Восстанавливаю силы после тяжелого утра",
            icon: "💤",
            color: "#06D6A0"
        },
        {
            time: "15:30",
            title: "Обед",
            description: "Снова ем, потому что проснулась",
            icon: "🍽️",
            color: "#06D6A0"
        },
        {
            time: "16:00-20:00",
            title: "Активность",
            description: "Бегаю по квартире, как будто за мной гонятся",
            icon: "🐈",
            color: "#06D6A0"
        },
        {
            time: "21:00",
            title: "Ночная охота",
            description: "Ловлю невидимых существ под диваном",
            icon: "👁️",
            color: "#06D6A0"
        },
    ];

    return (
        <div className="schedule-container">
            <h2 className="section-title">Мой распорядок дня</h2>

            <div className="timeline">
                {scheduleItems.map((item, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${activeItem === index ? 'active' : ''}`}
                        onMouseEnter={() => setActiveItem(index)}
                        onMouseLeave={() => setActiveItem(null)}
                        style={{ '--accent-color': item.color } as React.CSSProperties}
                    >
                        <div className="timeline-time">
                            <span className="timeline-icon">{item.icon}</span>
                            {item.time}
                        </div>
                        <div className="timeline-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="timeline-dot"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}