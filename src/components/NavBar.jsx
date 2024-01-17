import { useAuth } from '../providers/AuthUser';

export default function NavBar() {
  const { isAuth, logout } = useAuth();

  return (
    <>
      <nav className='w-full h-16 bg-rose-400 flex justify-end items-center fixed'>
        {isAuth && <button onClick={logout}>Logout</button>}
      </nav>
    </>
  );
}
