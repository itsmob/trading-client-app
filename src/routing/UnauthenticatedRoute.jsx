import { Navigate } from 'react-router-dom';

import { useAuth } from '../providers/AuthUser';

import { PAGES } from './Pages.js';
const { component: Home } = PAGES.Home;

// eslint-disable-next-line react/prop-types
export default function UnauthenticatedRoute({ component: Component }) {
  const { isAuth, isLoading: userIsLoading } = useAuth();

  if (userIsLoading)
    return (
      <div className='pt-16 min-h-screen'>
        <span>Loading...</span>
      </div>
    );

  if (Component == Home) return <Home />;

  return !isAuth ? <Component /> : <Navigate to='/' />;
}
