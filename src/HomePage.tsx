import React from 'react';
import { IonToolbar, IonTitle, IonContent, IonCard, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react'



const HomePage = ({ history }) => (
    <>
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Home Page</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Home Page</IonCardSubtitle>
                    <IonCardTitle>Let's take a look at the blog</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <p>Sounds like a great idea. Click the button below!</p>

                    <IonButton onClick={(e) => {
                        e.preventDefault();
                        history.push('home/blog');
                    }} >Blog</IonButton> 

                </IonCardContent>
            </IonCard>
        </IonContent>
    </>
)
export default HomePage