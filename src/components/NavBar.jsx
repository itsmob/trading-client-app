import { Link } from 'react-router-dom';

import { useAuth } from '../providers/AuthUser';

import ButtonLink from '../components/ButtonLink';

export default function NavBar() {
  const { isAuth, logout } = useAuth();

  return (
    <>
      <nav className='w-full h-16 bg-white fixed border border-b'>
        <div className='container h-full flex items-center'>
          <div className='content w-full flex justify-between items-center'>
            <div>
              <Link to={'/'}>
                <h3 className='text-sky-600 p-1 rounded border-2 border-sky-600 hover:bg-sky-200 active:bg-sky-300 ease-in duration-300'>
                  Trading app
                </h3>
              </Link>
            </div>
            <div>
              {isAuth && (
                <ButtonLink padding={2} onClick={logout}>
                  Logout
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
