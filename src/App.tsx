import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import { publicRoutes } from './routes';
import { useLoading } from './hooks/useLoading';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading && (
        <div className="loading">
          <CircularProgress />
        </div>
      )}
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
