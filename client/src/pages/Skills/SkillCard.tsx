import { useEffect, useRef } from "react";
import { SkillsItem } from "../../api/Skills";

interface SkillCardProps {
    items: SkillsItem[];
}

export const SkillCard = ({ items }: SkillCardProps) => {
    const getViewType = (id: number): string => {
        return `view-${id}`;
    };

    return (
        <div className="skills-grid">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="skill-card"
                    data-view={getViewType(item.id)}
                >
                    <div className="skill-icon">{item.emodji}</div>
                    <h3>{item.title}</h3>
                    <SkillMeter level={item.level ?? 5} /> {/* Уровень по умолчанию 5 */}
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

// Компонент индикатора уровня
const SkillMeter = ({ level }: { level: number }) => {
    const meterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (meterRef.current) {
            // Анимация заполнения
            meterRef.current.style.width = `${level * 10}%`;
        }
    }, [level]);

    return (
        <div className="skill-meter-container">
            <div className="skill-meter" ref={meterRef}>
                <span className="skill-level">{level}/10</span>
            </div>
        </div>
    );
};