import { useForm } from 'react-hook-form';
import { Link, redirect } from 'react-router-dom';

import { useAuth } from '../providers/AuthUser';

import ButtonLink from '../components/ButtonLink';

export default function Register() {
  const { register, handleSubmit } = useForm();
  const { register: signup } = useAuth();

  const onSubmit = async (data) => {
    try {
      await signup(data);
      return redirect('/');
    } catch (e) {
      console.log('registerComponent', e.response.data.message);
    }
  };

  return (
    <>
      <main className='Register pt-16 min-h-screen'>
        <section className='container'>
          <div className='max-w-sm mx-auto'>
            <h1 className='text-2xl py-3'>Sign up</h1>
            <form className=' border rounded p-4 flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
              <div className='errors'>
                <span>{}</span>
              </div>
              <input
                className='my-2 border rounded text-center'
                placeholder='First name'
                type='text'
                autoComplete='given-name'
                {...register('firstName')}
              />
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
              <Link to={'/login'}>
                <span className='my-2 block'>Already have an account? Sign in</span>
              </Link>
              <ButtonLink className='my-2 block'>Sign up</ButtonLink>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
