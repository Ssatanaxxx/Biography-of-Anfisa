import { AboutUs } from "./AboutUs";
import { AboutUsSchema, AboutUsSchemaTwo } from "../../api/AboutUs";
import db from "../../../db.json";

export const AboutUsLoader = () => {
  const itemsResult = AboutUsSchema.array().safeParse(db.AboutUS);

  const contentResult = AboutUsSchemaTwo.array().safeParse(db.ShowContent);

  if (!itemsResult.success) {
    console.error("Invalid items format:", itemsResult.error);
    return <div>Error loading items</div>;
  }

  if (!contentResult.success) {
    console.error("Invalid content format:", contentResult.error);
    return <div>Error loading content</div>;
  }

  return <AboutUs items={itemsResult.data} showContent={contentResult.data} />;
};