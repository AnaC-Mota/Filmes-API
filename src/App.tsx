import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, heart, home, search } from 'ionicons/icons';
import Detalhes from './pages/detalhes';
import Home from './pages/home';
import Tab3 from './pages/Tab3';
import Movies from './pages/movies';
import ListaDesejo from './pages/Tab5';
import { WishListProvider } from './context/DesejoContext'; 


import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
//import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <WishListProvider>
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/detalhes/:id" render={props =>
          <Detalhes {...props}/>}/>

          <Route exact path="/home/tab3">
            <Tab3 />
          </Route>

          <Route exact path="/movies">
            <Movies />
          </Route>

          <Route exact path="/listaDesejo">
            <ListaDesejo />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="moveies" href="/movies">
            <IonIcon aria-hidden="true" icon={search} />
            <IonLabel>Pesquisa</IonLabel>
          </IonTabButton>

          <IonTabButton tab="listaDesejo" href="/listaDesejo">
            <IonIcon aria-hidden="true" icon={heart} />
            <IonLabel>Lista de desejos</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  </WishListProvider>
);

export default App;
