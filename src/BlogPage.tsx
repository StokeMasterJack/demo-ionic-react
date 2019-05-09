import React from "react";
import {
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import * as H from 'history';

const BlogPage = ({history, goBack}: { history: H.History, goBack: VoidFunction }) => (
    <>
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonBackButton goBack={goBack} defaultHref='/'/>
                </IonButtons>
                <IonTitle>Blog Page</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
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
);
export default BlogPage;