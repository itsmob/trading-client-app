import { Navigate } from 'react-router-dom';

import { useAuth } from '../providers/AuthUser';

import { PAGES } from './Pages.js';
const { component: Login } = PAGES.Login;

// eslint-disable-next-line react/prop-types
export default function AuthenticatedRoute({ component: Component }) {
  const { isAuth, isLoading } = useAuth();

  if (isLoading)
    return (
      <>
        <div className='pt-16 min-h-screen'>
          <span>Loading...</span>
        </div>
      </>
    );

  return isAuth ? <Component /> : <Navigate to={<Login />} />;
}
