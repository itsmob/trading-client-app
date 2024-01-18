import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ButtonLink({ to: url, children }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        className='bg-emerald-200 hover:bg-emerald-300 active:bg-emerald-400 border border-emerald-300 active:border-emerald-500 rounded-md p-4 w-fit ease-in-out duration-300'
        onClick={() => navigate(url)}
      >
        {children}
      </button>
    </>
  );
}
