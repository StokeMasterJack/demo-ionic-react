import React from 'react';
import { IonToolbar, IonList, IonTitle, IonContent, IonItem, IonLabel, IonHeader, IonListHeader, IonAvatar } from '@ionic/react'
import * as H from "history";


const ItemsPage = ({ history }:{ history:H.History }) => (
    <>
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Items Page</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonListHeader>Here is some fruit for you!</IonListHeader>
                <IonItem button onClick={(e)=>{history.push('items/itemdetails/apple')}}>
                    <IonAvatar slot="start">
                        <img src='./images/apple.jpg' alt='Apple' />
                    </IonAvatar>
                    <IonLabel>
                        <h3>Apple</h3>
                    </IonLabel>
                </IonItem>
                <IonItem button onClick={(e)=>{history.push('items/itemdetails/orange')}}>
                    <IonAvatar slot="start">
                        <img src='./images/orange.jpg' alt='Orange' />
                    </IonAvatar>
                    <IonLabel>
                        <h3>Orange</h3>
                    </IonLabel>
                </IonItem>
                <IonItem button onClick={(e)=>{history.push('items/itemdetails/banana')}}>
                    <IonAvatar slot="start">
                        <img src='./images/banana.jpg' alt='Banana' />
                    </IonAvatar>
                    <IonLabel>
                        <h3>Banana</h3>
                    </IonLabel>
                </IonItem>
            </IonList>
        </IonContent>
    </>
)
export default ItemsPage