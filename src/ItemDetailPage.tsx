import React from 'react';
import { IonToolbar, IonTitle, IonContent, IonCard, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react'



const ItemDetailPage = ({match,history}) => (
    <>
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Item Detail Page</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Home Page</IonCardSubtitle>
                    <IonCardTitle>You chose {match.params.id} !!!</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonButton onClick={(e) => {
                        e.preventDefault();
                        history.goBack();
                    }} >Go Back To Items List</IonButton> 

                </IonCardContent>
            </IonCard>
        </IonContent>
    </>
)
export default ItemDetailPage