    import { SkillsItem } from "../../api/Skills"

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
                        <div className="skill-meter">
                            {/* Уровень навыка можно добавить позже */}
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        )
    }