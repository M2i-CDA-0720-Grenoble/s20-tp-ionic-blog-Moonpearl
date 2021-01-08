import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";
import React, { FC } from "react";
import Category from "../components/Category";
import { categories } from "../data";

const AllCategories: FC = () => {
  const sortedCategories = categories.sort(
    (category1, category2) => {
      if (category1.name > category2.name) {
        return 1;
      } else if (category1.name < category2.name) {
        return -1;
      }
      return 0;
    }
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Categories</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Categories</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Category.List categories={sortedCategories} />

      </IonContent>
    </IonPage>
  )
}

export default AllCategories;
