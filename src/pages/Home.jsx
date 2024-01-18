import { useAuth } from '../providers/AuthUser';

import ButtonLink from '../components/ButtonLink';

export default function Home() {
  const { user, isAuth } = useAuth();

  const MainContent = isAuth ? (
    <p className='text-2xl'>Hey {user?.firstName}!</p>
  ) : (
    <>
      <ButtonLink to={'/register'}>Create account</ButtonLink>
      <ButtonLink to={'/login'}>Sign in</ButtonLink>
    </>
  );

  return (
    <main className='min-h-screen w-full pt-16 '>
      <section className='h-full p-2 flex flex-col '>
        <h1 className='flex-none text-center py-4'>Welcome to the trading app</h1>
        <div className='flex-1 flex flex-col gap-4 items-center'>{MainContent}</div>
      </section>
    </main>
  );
}
