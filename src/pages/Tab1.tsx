import React, { lazy, Suspense } from 'react';
import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonPage, IonProgressBar, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { ListItemProps, ListProps } from '../components/List';
import { addOutline } from 'ionicons/icons';

const Card: React.FC = lazy(() => import('../components/Card'));
const List: React.FC<ListProps> = lazy(() => import('../components/List'));

const list: ListItemProps[] = [
  {
    title: 'Home 1',
    imageSrc: 'https://i.pinimg.com/originals/42/39/17/4239173bcc854d84c21250f7d010e543.jpg',
    location: 'Malaysia'
  },
  {
    title: 'My workplace',
    imageSrc: 'https://arpideas.com/wp-content/uploads//bfi_thumb/Office-365-1-3apuky6w2f2uaiwoejfqps.png',
    location: 'Malaysia'
  },
  {
    title: 'Home 3',
    imageSrc: 'https://i.pinimg.com/originals/42/39/17/4239173bcc854d84c21250f7d010e543.jpg',
    location: 'Malaysia'
  },

]

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Overview</IonTitle>
          {/* <IonProgressBar type="indeterminate" /> */}
          {/* <IonProgressBar type="indeterminate" /> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Overview</IonTitle>
          </IonToolbar>
          {/* <IonToolbar>
            <IonSearchbar />
          </IonToolbar> */}
        </IonHeader>
        <Suspense fallback={<div>Page is loading ...</div>}>
          {/* <Card /> */}
          <List list={list} />
        </Suspense>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={addOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
