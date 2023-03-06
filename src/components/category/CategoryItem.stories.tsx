import CategoryItem from "./CategoryItem";
import CategoryData from "../../fixtures/categories";

export default {
  component: CategoryItem,
  title: "Category/Category Item",
};

export const Default = () => <CategoryItem category={CategoryData[0]} />;
