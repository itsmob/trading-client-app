import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from '../providers/AuthUser.jsx';

import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import UnauthenticatedRoute from './UnauthenticatedRoute.jsx';
import { PAGES_ARRAY } from './Pages.js';

import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <NavBar />
            <Routes>
              {PAGES_ARRAY.map(({ name, path, authenticated, component }) => (
                <Route
                  key={name}
                  path={path}
                  element={
                    authenticated ? (
                      <AuthenticatedRoute component={component} />
                    ) : (
                      <UnauthenticatedRoute component={component} />
                    )
                  }
                />
              ))}
            </Routes>
            <Footer />
          </QueryClientProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}
