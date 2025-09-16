import { SyncLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='mx-auto w-full flex items-start justify-center mt-10 h-screen '>
      <SyncLoader color='#14ddb6' margin={8} size={20} />
    </div>
  );
};

export default Spinner;
