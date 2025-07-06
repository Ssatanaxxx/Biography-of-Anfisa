import { AboutUs } from "./AboutUs";
import { AboutUsSchema } from "../../api/AboutUs";
import db from "../../../db.json";

export const AboutUsLoader = () => {
  const result = AboutUsSchema.array().safeParse(db.AboutUS);
  
  if (!result.success) {
    console.error("Invalid data format:", result.error);
    return <div>Error loading data</div>;
  }

  return <AboutUs items={result.data} />;
};