import {createRoot} from 'react-dom/client';
import {App} from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';
import { GlobalStyle } from './global-style';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);