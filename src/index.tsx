import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from "./App";
import store from './redux/store';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

createRoot(document.getElementById('root')!).render(app);
