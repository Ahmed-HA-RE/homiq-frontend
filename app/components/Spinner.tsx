import { SyncLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='mx-auto w-full flex items-center justify-center pt-20 md:pt-30'>
      <SyncLoader color='#14ddb6' margin={8} size={20} />
    </div>
  );
};

export default Spinner;
