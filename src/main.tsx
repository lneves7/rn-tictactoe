import { registerRootComponent } from 'expo';
import App from './components/App';
import { PlayerDataContextProvider } from './context';

const RootComponent = () => (
  <PlayerDataContextProvider>
    <App />
  </PlayerDataContextProvider>
);

registerRootComponent(RootComponent);
