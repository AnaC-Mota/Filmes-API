import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { heartOutline, heart } from 'ionicons/icons';
import { useWishList } from '../context/DesejoContext';
import './detalhes.css';
import { RouteComponentProps } from 'react-router';
import { MovieService } from '../services/movie.service';
import { Chart } from 'react-google-charts';
import { useHistory } from "react-router-dom";

interface MovieDetailsPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Detalhes: React.FC<MovieDetailsPageProps> = ({ match }) => {
  const [movieDetails, setMovieDetails] = React.useState<any>(null);
  const service = new MovieService();
  const [isFavorited, setIsFavorited] = React.useState(false);
  const { addToWishList } = useWishList(); 
  const history = useHistory();

  React.useEffect(() => {
    const fetchDetails = async () => {
      const data = await service.getDetails(match.params.id);
      setMovieDetails(data);
    };

    fetchDetails();
  }, [match.params.id]);

  const handleFavoriteClick = () => {
    setIsFavorited(true); // Define como favoritado
    addToWishList(movieDetails); // Adiciona à lista de desejos
    history.push("/listaDesejo"); // Redireciona para a página de favoritos
  };

  const ratingData = [
    ["Métrica", "Valor"],
    ["Avaliação Média", movieDetails?.ratingsSummary?.aggregateRating || 0],
    ["Total de Votos (milhões)", (movieDetails?.ratingsSummary?.voteCount || 0) / 1_000_000],
  ];

  const awardData = [
    ["Tipo", "Quantidade"],
    ["Prêmios Vencidos", movieDetails?.wins?.total || 0],
    ["Nomeações", movieDetails?.nominationsExcludeWins?.total || 0],
  ];

  const customData = [
    ["Categoria", "Quantidade"],
    ["Ação", 10],
    ["Comédia", 15],
    ["Drama", 7],
    ["Suspense", 12],
  ];

  const ratingOptions = {
    title: "Avaliação do Filme",
    legend: { position: "none" },
    colors: ["#4285F4"],
  };

  const awardOptions = {
    title: "Prêmios e Nomeações",
    is3D: true,
  };

  const customOptions = {
    title: "Distribuição por Gênero",
    pieHole: 0.4, // Gráfico de pizza com estilo de donut
    slices: [
      { color: "#4CAF50" },
      { color: "#FFC107" },
      { color: "#FF5722" },
      { color: "#03A9F4" },
    ],
  };

  return (
    <>
      {movieDetails != null ? (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{movieDetails.titleText.text}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonImg
                src={movieDetails.primaryImage?.url || ""}
                alt={movieDetails.titleText.text}
              />
              <IonCardHeader>
                <IonCardTitle>
                  {movieDetails.titleText.text}
                  <IonButton fill="clear" onClick={handleFavoriteClick}>
                    <IonIcon icon={isFavorited ? heart : heartOutline} />
                  </IonButton>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  <strong>Director:</strong>{" "}
                  {movieDetails.directors?.[0]?.credits?.[0]?.name?.nameText?.text || "N/A"}
                </p>
                <p>
                  <strong>Local de filmagem: </strong>
                  {movieDetails.filmingLocations?.edges?.[0]?.node?.location || "Desconhecido"}
                </p>
                <p>
                  <strong>Descrição:</strong>{" "}
                  {movieDetails.plot?.plotText?.plainText || "Sem descrição disponível"}
                </p>
              </IonCardContent>
            </IonCard>

            {/* Gráfico de Avaliação */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Avaliação e Popularidade</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <Chart
                  chartType="BarChart"
                  data={ratingData}
                  options={ratingOptions}
                  width="100%"
                  height="300px"
                />
              </IonCardContent>
            </IonCard>

            {/* Gráfico de Prêmios */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Prêmios</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <Chart
                  chartType="PieChart"
                  data={awardData}
                  options={awardOptions}
                  width="100%"
                  height="300px"
                />
              </IonCardContent>
            </IonCard>

            {/* Gráfico Personalizado */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Gêneros de Filmes</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <Chart
                  chartType="PieChart"
                  data={customData}
                  options={customOptions}
                  width="100%"
                  height="300px"
                />
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
      ) : (
        <IonPage>
          <div>Carregando detalhes...</div>
        </IonPage>
      )}
    </>
  );
};

export default Detalhes;
