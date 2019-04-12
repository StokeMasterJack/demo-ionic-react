import React from 'react';
import { IonToolbar, IonTitle, IonContent, IonCard, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, } from '@ionic/react'

const About = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>About Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent >
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>This App is totaly useless and for demo purposes only.</IonCardSubtitle>
          <IonCardTitle>About This App</IonCardTitle>
        </IonCardHeader>
      </IonCard>

    </IonContent>
  </>
)
export default About