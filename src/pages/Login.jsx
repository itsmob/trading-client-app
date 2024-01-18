import { useForm } from 'react-hook-form';
import { Link, redirect } from 'react-router-dom';

import { useAuth } from '../providers/AuthUser';
import ButtonLink from '../components/ButtonLink';

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
        <section className='container'>
          <div className='max-w-sm mx-auto'>
            <h1 className='text-2xl py-3'>Sign in</h1>
            <form className=' border rounded p-4 flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
              <div className='errors'>
                <span>{}</span>
              </div>
              <input
                className='my-2 border rounded text-center'
                placeholder='Email'
                type='email'
                autoComplete='email'
                {...register('email')}
              />
              <input
                className='my-2 border rounded text-center'
                placeholder='Password'
                type='password'
                autoComplete='current-password'
                {...register('password')}
              />
              <Link to={'/register'}>
                <span className='my-2 block'>Dont have an account? Sign up</span>
              </Link>
              <ButtonLink className='my-2 block'>Sign in</ButtonLink>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
