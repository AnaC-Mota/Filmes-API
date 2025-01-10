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
import './movies.css';
import { MovieService } from '../services/movie.service';

const MoviesByCategoryPage: React.FC = () => {
  const [moviesByCategory, setMoviesByCategory] = React.useState<{ [category: string]: any[] }>({});

  React.useEffect(() => {
    let movieService = new MovieService();

    const categories = ['action', 'comedy', 'drama', 'horror', 'sci-fi', 'adventury', 'animation', 'fantasy'];

    const fetchMovies = async () => {
      const categoryMovies: { [category: string]: any[] } = {};
      for (const category of categories) {
        const data = await movieService.searchData(category); 
        categoryMovies[category] = data.results;
      }
      setMoviesByCategory(categoryMovies);
    };

    fetchMovies();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Movies By Category</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Movies By Category</IonTitle>
          </IonToolbar>
        </IonHeader>

        {Object.entries(moviesByCategory).map(([category, movies]) => (
          <div key={category}>
            <h2 style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>{category.toUpperCase()}</h2>
            <IonList>
              {movies.map((movie) => (
                <IonItem key={movie.id}>
                  <IonThumbnail slot="start">
                    <img src={movie.titlePosterImageModel.url} alt={movie.titleNameText} />
                  </IonThumbnail>
                  {movie.titleNameText} ({movie.titleReleaseText})
                  <IonButton href={'detalhes/'+movie['id']} color="primary" slot="end">Details</IonButton>
                </IonItem>
              ))}
            </IonList>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default MoviesByCategoryPage;
