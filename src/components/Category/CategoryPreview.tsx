import { IonItem } from "@ionic/react";
import React, { FC } from "react";
import { articles } from "../../data";
import { Category } from "../../models";

interface CategoryPreviewProps {
  category: Category;
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ category }) => {
  const articleCount = articles.filter( article => article.category.id === category.id ).length;

  return (
    <IonItem>
      {category.name} ({articleCount})
    </IonItem>
  );
}

export default CategoryPreview;
