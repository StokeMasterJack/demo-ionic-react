import React from "react";
import {
    IonAvatar,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import * as R from "react-router";
import * as H from "history";


const ItemDetailPage = ({match, history, goBack}: { match: R.match<{ id: string }>, history: H.History, goBack: VoidFunction }) => (
    <>
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonBackButton goBack={goBack} defaultHref='/items'/>
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
                        <img src={`/images/${match.params.id}.jpg`}/>
                    </IonAvatar>
                </IonCardHeader>
            </IonCard>
        </IonContent>
    </>
);
export default ItemDetailPage;