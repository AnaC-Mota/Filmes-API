import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList,IonItem, IonButton, IonSearchbar, IonThumbnail } from '@ionic/react';
import React from 'react';
import './movies.css';
import { MovieService } from '../services/movie.service';

const MoviesPage: React.FC = () => {

  const [titleSearch, setTitleSearch] = React.useState('');
  const [movies, setMovies] = React.useState([{ titleNameText: "1", id: "2", titlePosterImageModel: {caption: "3.1", maxHeight: "3.2", maxWidth
: "3.3", url: "3.4"  }, titleReleaseText: "4", titleTypeText: "5", topCredits: ["6"] }]);
  const items: any[] = [];  

  React.useEffect(() => {
    let m=new MovieService();
    m.searchData(titleSearch).then(data => setMovies(data.results));

  }, [titleSearch]);
  React.useEffect(() => {
    console.log(movies);
  }, [movies]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>movies</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">movies</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonSearchbar value={titleSearch} onIonChange={e => {
          if (e.detail.value === undefined) return;
          setTitleSearch(e.detail.value!)}}
          ></IonSearchbar>
        <IonList>
          {(movies?
            movies.map(a => {
              return (
                <IonItem key={a['id']}>
                  <IonThumbnail slot="start">
                  <img src={a.titlePosterImageModel.url}/>
                  </IonThumbnail>
                  {a['titleNameText']+" ("}
                  {a['titleReleaseText']+")"}
                  <IonButton href={'detalhes/'+a['id']} color="primary" slot="end">Detalhes</IonButton>
                </IonItem>
              );
            }):'')
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MoviesPage;
