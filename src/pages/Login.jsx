import { useForm } from 'react-hook-form';
import { Link, redirect } from 'react-router-dom';

import { useAuth } from '../providers/AuthUser';

export default function Login() {
  const { register, handleSubmit } = useForm();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data);
      return redirect('/');
    } catch (e) {
      console.log('loginComponent', e.response.data.message);
    }
  };

  return (
    <>
      <main className='Login pt-16 min-h-screen'>
        <section>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='errors'>
              <span>{}</span>
            </div>
            <input type='email' autoComplete='email' {...register('email')} />
            <input type='password' autoComplete='current-password' {...register('password')} />
            <button>Sign in</button>
          </form>
          <Link to={'/register'}>Dont have an account? Create one here</Link>
        </section>
      </main>
    </>
  );
}
