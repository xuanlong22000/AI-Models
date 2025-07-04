import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './components/GlobalStyles/GlobalStyle.tsx';
import './i18n';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <GlobalStyles>
      <App />
    </GlobalStyles>
  );
});
