import React from 'react';
import { IonTabs, IonTabButton, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonPage } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import ItemsPage from "./ItemsPage";
import ItemDetailPage from "./ItemDetailPage";
import About from './About';

const AppStack: React.FC = () => (
  <IonPage>
    <Route exact path="/" render={() => <Redirect to="/home"/>}/>


    <IonTabs>
      <IonRouterOutlet>
        <Route path="/:tab(home)" component={HomePage} exact={true} />
        <Route path="/:tab(home)/blog" component={BlogPage} />
        <Route path="/:tab(items)" component={ItemsPage} exact={true} />
        <Route path="/:tab(items)/itemdetails/:id" component={ItemDetailPage} />
        <Route path="/:tab(about)" component={About} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon name="home" />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="items" href="/items">
          <IonIcon name="list" />
          <IonLabel>Items</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/about">
          <IonIcon name="information-circle" />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
);

export default AppStack;

//https://ionicons.com/