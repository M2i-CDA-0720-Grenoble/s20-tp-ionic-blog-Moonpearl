import { documentTextOutline, fileTrayStackedOutline } from "ionicons/icons";
import { lazy } from "react";
import { Route } from "../models";

const Home = lazy( () => import('../pages/Home') );
const AllCategories = lazy( () => import('../pages/AllCategories') );
const SingleArticle = lazy( () => import('../pages/SingleArticle') );

const routes: Route[] = [
  {
    uri: '/tabs/articles',
    name: 'articles',
    icon: documentTextOutline,
    text: 'Articles',
    displayTab: true,
    Component: Home,
  },

  {
    uri: '/tabs/categories',
    name: 'categories',
    icon: fileTrayStackedOutline,
    text: 'Categories',
    displayTab: true,
    Component: AllCategories,
  },

  {
    uri: '/articles/:id(\\d+)',
    name: 'articles_single',
    displayTab: false,
    Component: SingleArticle,
  }
];

export default routes;
