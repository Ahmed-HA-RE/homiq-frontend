import { SyncLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='mx-auto w-full flex items-center justify-center h-screen -mt-40'>
      <SyncLoader color='#14ddb6' margin={8} size={20} />
    </div>
  );
};

export default Spinner;
