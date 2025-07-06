import { SkillsSchema } from "../../api/Skills";
import { Skills } from "./Skills";
import db from "../../../db.json";

export const SkillsLoader = () => {
    const result = SkillsSchema.array().safeParse(db.Skills);

    if (!result.success) {
        console.error("Invalid data format:", result.error);
        return <div>Error loading data</div>;
    }

    return <Skills items={result.data} />;
};