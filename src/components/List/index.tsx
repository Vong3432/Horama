import React from 'react';
import { IonList, IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions, IonIcon, IonBadge, IonAvatar } from '@ionic/react';
import { linkOutline } from 'ionicons/icons';

export interface ListItemProps {
  title: string;
  imageSrc: string;
  location: string;
}

export interface ListProps {
  list: ListItemProps[];
}

const List: React.FC<ListProps> = ({ list }) => (
  <>
    {/*-- List of Sliding Items --*/}
    <IonList>
      {list.map((home) =>
        <>
          <IonItemSliding>
            <IonItem>
              <IonAvatar slot="start">
                <img src={home.imageSrc} />
              </IonAvatar>
              <IonIcon onClick={() => { }} slot="end" icon={linkOutline} />
              <IonBadge slot="end">4</IonBadge>
              <IonLabel>
                <h2>{home.title}</h2>
                <h3>{home.location}</h3>
              </IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => { }}>Edit</IonItemOption>
              <IonItemOption color="danger" onClick={() => { }}>Remove</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </>
      )}

    </IonList>
  </>
);

export default List;