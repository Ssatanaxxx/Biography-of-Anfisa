import { useEffect, useRef } from "react";

export const SkillMeter = ({ level }: { level: number }) => {
    const meterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (meterRef.current) {
            meterRef.current.style.width = `${level * 10}%`;
            meterRef.current.className = `skill-meter ${level < 4 ? 'level-low' :
                level < 7 ? 'level-medium' :
                    'level-high'
                }`;
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