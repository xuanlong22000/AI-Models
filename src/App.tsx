import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import { publicRoutes } from './routes';

function App() {
  useEffect(() => {
    fetch('/models').then((res) => res.json());
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
