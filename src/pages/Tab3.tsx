import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './detalhes.css';

const detalhes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NEVOA DA FLORESTA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
            
                <img alt="Silhouette of mountains" src="./public/capa1.jpeg" />
             
            </IonCol>

            <IonCol>
            <p>
              Nome: Névoa da Floresta
            </p>
            <p>Autora: Patricia Cândido</p>
            <p>Data: 2016</p>
            <p>
              Descrição: O livro Névoa na Floresta é uma obra de mistério e suspense que se passa em um ambiente sombrio e isolado, 
              cercado pela natureza e envolto por uma névoa densa que intensifica o clima de tensão. A trama geralmente gira em torno 
              de personagens que se encontram em uma floresta misteriosa, onde segredos antigos, lendas locais ou forças sobrenaturais 
              começam a emergir à medida que a névoa envolve a todos.
            </p>
            <p>
              Os temas de Névoa na Floresta costumam explorar a luta entre o medo do desconhecido e a busca pela verdade, criando uma 
              atmosfera de claustrofobia e vulnerabilidade. Os personagens frequentemente enfrentam dilemas psicológicos e perigos ocultos 
              na floresta, que pode representar tanto uma ameaça física quanto uma metáfora para o desconhecido dentro de si mesmos.
            </p>
            <p>
              Elementos de reviravoltas inesperadas, segredos obscuros e mistérios não resolvidos são comuns em histórias desse tipo, 
              tornando o livro uma leitura cheia de suspense. A névoa funciona como um recurso narrativo para esconder e revelar gradualmente 
              os segredos da trama, mantendo o leitor intrigado até o fim.
            </p>
            </IonCol>
          </IonRow>
        </IonGrid>
         
      
      </IonContent>
    </IonPage>
  );
};

export default detalhes;
