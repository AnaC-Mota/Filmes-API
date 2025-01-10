import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonButton,
  IonThumbnail,
} from '@ionic/react';
import React from 'react';
import { useWishList } from '../context/DesejoContext'; 
import './movies.css'; 

const ListaDesejo: React.FC = () => {
  const { wishList, removeFromWishList } = useWishList();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Minha Lista de Desejos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lista de Desejos</IonTitle>
          </IonToolbar>
        </IonHeader>

        {wishList.length > 0 ? (
          <IonList>
            {wishList.map((movie) => (
              <IonItem key={movie.id}>
                <IonThumbnail slot="start">
                  <img src={movie.primaryImage.url || ''} alt={movie.titleText.text} />
                </IonThumbnail>
                {movie.titleText.text}
                <IonButton
                  slot="end"
                  color="danger"
                  onClick={() => removeFromWishList(movie.id)} 
                >
                  Remover
                </IonButton>
                <IonButton href={`/detalhes/${movie.id}`} color="primary" slot="end">
                  Detalhes
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        ) : (
          <p style={{ textAlign: 'center', padding: '20px' }}>
            Sua lista de desejos está vazia.
          </p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ListaDesejo;
