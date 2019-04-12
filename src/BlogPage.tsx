import React from 'react';
import { IonToolbar, IonTitle, IonContent, IonCard, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, } from '@ionic/react'

const BlogPage = ({history}) => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Blog Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent onClick={(e) => {
                        e.preventDefault();
                        console.log('historys',history);
                        history.goBack();
                    }} >
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Vue.js</IonCardSubtitle>
          <IonCardTitle>Ionic 4 and Vue.js</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>REACT</IonCardSubtitle>
          <IonCardTitle>Ionic 4 and React</IonCardTitle>
        </IonCardHeader>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>ANGULAR</IonCardSubtitle>
          <IonCardTitle>Ionic 4 and Angular</IonCardTitle>
        </IonCardHeader>
      </IonCard>
    </IonContent>
  </>
)
export default BlogPage