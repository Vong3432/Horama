import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg } from '@ionic/react';
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

const Card: React.FC = () => {
  return (
    <>
      <IonCard>
        {/* <IonImg style={{ height: '300px', objectFit: 'cover' }} src="http://placekitten.com/g/200/300" /> */}

        <IonCardHeader>
          {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
          <IonCardTitle>Home Tour 1</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default Card;