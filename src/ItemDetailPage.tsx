import React from 'react';
import { IonToolbar, IonTitle, IonContent, IonCard, IonButtons, IonBackButton, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react'



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
                    <IonCardSubtitle>A tasty fruit!</IonCardSubtitle>
                    <IonCardTitle>{match.params.id}</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        </IonContent>
    </>
)
export default ItemDetailPage