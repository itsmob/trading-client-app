import { Link } from 'react-router-dom';

import { useAuth } from '../providers/AuthUser';

export default function Home() {
  const { user, isAuth } = useAuth();

  const MainContent = isAuth ? (
    <section>
      <h1>Welcome to the trading app</h1>
      <p className='text-2xl'>Hey {user?.firstName}!</p>
    </section>
  ) : (
    <section>
      <h1>Welcome to the trading app</h1>
      <Link to={'/register'}>Create account</Link>
      <Link to={'/login'}>Sign in</Link>
    </section>
  );

  return <main className='min-h-screen pt-16'>{MainContent}</main>;
}
