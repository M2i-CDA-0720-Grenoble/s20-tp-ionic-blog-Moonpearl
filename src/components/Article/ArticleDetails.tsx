import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React, { FC } from "react";
import { Article } from "../../models";
import MarkupContainer from "../MarkupContainer";

import './ArticleDetails.css';

interface ArticleDetailsProps {
  article: Article,
}

const ArticleDetails: FC<ArticleDetailsProps> = ({ article }) =>
  <IonCard>
    <img src={article.cover} alt={`Cover for article: ${article.title}`} />

    <IonCardHeader>
      <IonBadge color="tertiary">{article.category.name}</IonBadge>
      <IonCardTitle>{article.title}</IonCardTitle>
      <IonCardSubtitle>Published on {article.createdAt.toLocaleString('en-GB')}</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>
      <MarkupContainer className="ArticleDetails-content" html={article.content} />
    </IonCardContent>

  </IonCard>
;

export default ArticleDetails;
