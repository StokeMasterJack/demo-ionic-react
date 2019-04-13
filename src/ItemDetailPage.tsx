import React from 'react';
import { IonToolbar, IonTitle, IonContent, IonCard, IonButtons, IonBackButton, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonAvatar } from '@ionic/react'



const ItemDetailPage = ({ match, history, goBack }) => (
    <>
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonBackButton goBack={goBack} defaultHref='/items' />
                </IonButtons>
                <IonTitle>{match.params.id}</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{match.params.id}</IonCardTitle>
                    <IonCardSubtitle>A tasty fruit!</IonCardSubtitle>
                    <IonAvatar>
                        <img src={`/images/${match.params.id}.jpg`}   />
                    </IonAvatar>
                </IonCardHeader>
            </IonCard>
        </IonContent>
    </>
)
export default ItemDetailPage