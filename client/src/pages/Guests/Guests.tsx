import { useEffect, useRef, useState } from 'react';

export const Guests = () => {
    const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
                        setVisibleCards(prev => {
                            const newVisible = [...prev];
                            newVisible[index] = true;
                            return newVisible;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            cardsRef.current.forEach(card => {
                if(card) observer.unobserve(card)
            })
        };
    }, []);

    const addToRefs = (el: HTMLDivElement | null, index: number) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current[index] = el;
        }
    };

    return (
        <div className="guests-container">
            <h2 className="section-title">Когда приходят гости</h2>
            <p className="section-subtitle">Мой официальный протокол поведения для посетителей</p>

            <div className="protocol-steps">
                {[
                    {
                        id: 1,
                        type: 'inspection',
                        title: 'Тщательный осмотр',
                        description: 'Обнюхиваю гостей на предмет чужих кошачьих запахов и принесенных лакомств. Особое внимание уделяю обуви и сумкам.',
                        duration: 'Длительность: 3-7 минут',
                        icon: '🔍'
                    },
                    {
                        id: 2,
                        type: 'ignore',
                        title: 'Тактика игнорирования',
                        description: 'Делаю вид, что гости мне совершенно неинтересны. Ухожу в другую комнату, демонстративно повернувшись спиной.',
                        duration: 'Длительность: 10-15 минут',
                        icon: '🙈'
                    },
                    {
                        id: 3,
                        type: 'approach',
                        title: 'Осторожное сближение',
                        description: 'Подхожу к самому тихому гостю, делая вид, что случайно оказалась рядом. Позволяю погладить себя ровно один раз.',
                        duration: 'Длительность: 2-3 минуты',
                        icon: '🐾'
                    },
                    {
                        id: 4,
                        type: 'test',
                        title: 'Проверка на прочность',
                        description: 'Внезапно запрыгиваю гостю на колени без предупреждения. Если не сбрасывают - автоматически получают статус "проверенный".',
                        duration: 'Длительность: до конца визита',
                        icon: '⚡'
                    },
                    {
                        id: 5,
                        type: 'begging',
                        title: 'Выпрашивание еды',
                        description: 'Использую гостей как дополнительный источник угощений. Делаю максимально жалобные глаза, даже если только что поела.',
                        duration: 'Длительность: пока не дадут еду',
                        icon: '🥺'
                    }
                ].map((step, index) => (
                    <div
                        key={step.id}
                        ref={el => addToRefs(el, index)}
                        className={`protocol-card protocol-card--${step.type} ${visibleCards[index] ? 'visible' : ''
                            }`}
                    >
                        <div className="protocol-number">{String(step.id).padStart(2, '0')}</div>
                        <div className="protocol-content">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            <div className="protocol-duration">{step.duration}</div>
                        </div>
                        <div className="protocol-icon floating pulse spin-flicker">
                            {step.icon}
                        </div>
                    </div>
                ))}
            </div>

            <div className="guest-rules">
                <h3>Строгие правила для гостей:</h3>
                <ul className="rules-list">
                    {[
                        'Не пытаться брать меня на руки без разрешения',
                        'Не смотреть мне прямо в глаза - это угроза',
                        'Не гладить против шерсти - это карается укусом',
                        'Все принесенные угощения подлежат обязательной проверке',
                        'Фотосессии только с моего согласия (обычно соглашаюсь за угощение)'
                    ].map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ul>

                <div className="emergency-box">
                    <h4>Чрезвычайные ситуации:</h4>
                    <p>Если я внезапно убежала и спряталась - значит, кто-то нарушил протокол. Рекомендуется
                        оставить на видном месте пакетик с влажным кормом для примирения.</p>
                </div>
            </div>
        </div>
    );
};