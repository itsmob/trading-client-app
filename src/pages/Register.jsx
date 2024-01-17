import { useForm } from 'react-hook-form';
import { Link, redirect } from 'react-router-dom';

import { useAuth } from '../providers/AuthUser';

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
      <main className='Register'>
        <section>
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='errors'>
              <span>{}</span>
            </div>
            <input type='text' autoComplete='given-name' {...register('firstName')} />
            <input type='email' autoComplete='email' {...register('email')} />
            <input type='password' autoComplete='current-password' {...register('password')} />
            <button>Sign up</button>
          </form>
          <Link to={'/login'}>Already have an account?</Link>
        </section>
      </main>
    </>
  );
}
