import { SkillCard } from "./SkillCard";
import { SkillsItem } from "../../api/Skills";

interface SkillsProps {
    items: SkillsItem[];
}

export const Skills = ({ items }: SkillsProps) => {
    return (
        <div className="skills-container">
            <div className="skill-up">
                <span className="skill-paw"></span>
                <h2 className="section-title">Профессиональные навыки</h2>
                <span className="skill-paw"></span>
            </div>
            <SkillCard items={items} />
        </div>
    );
};