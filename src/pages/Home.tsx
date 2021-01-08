import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { FC } from 'react';
import { Article } from '../components';
import { articles } from '../data';
import './Home.css';

const Home: FC = () => {
  const sortedArticles = articles.sort(
    (article1, article2) => Number(article2.createdAt) - Number(article1.createdAt)
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Articles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Articles</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Article.List articles={sortedArticles} />

      </IonContent>
    </IonPage>
  );
};

export default Home;
