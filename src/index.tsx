import { createRoot } from 'react-dom/client';
import App from "./App";

const app = (
    <App />
);

createRoot(document.getElementById('root')!).render(app);
