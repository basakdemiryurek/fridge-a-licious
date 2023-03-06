import Category from "../../models/CategoryModel";

export interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category: { id, name },
}) => {
  return <>{name}</>;
};

export default CategoryItem;
