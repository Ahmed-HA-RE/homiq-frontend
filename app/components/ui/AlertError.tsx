import { CircleAlert, CircleX } from 'lucide-react';
import { useState } from 'react';

const AlertError = ({ message }: { message: string | undefined }) => {
  const [visible, setVisible] = useState(true);
  return (
    visible && (
      <div className='rounded-md border border-red-500/50 px-4 py-3 text-red-600 flex flex-row justify-between items-center'>
        <p className='text-base'>
          <CircleAlert
            className='me-3 -mt-0.5 inline-flex opacity-60'
            size={18}
            aria-hidden='true'
          />
          {message}
        </p>
        <CircleX
          className='cursor-pointer'
          color='#e91616'
          strokeWidth={1.25}
          size={18}
          onClick={() => setVisible(!visible)}
        />
      </div>
    )
  );
};

export default AlertError;
