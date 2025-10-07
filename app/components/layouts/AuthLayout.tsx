import Footer from '../ui/Footer';

type AuthLayout = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayout) => {
  return (
    <>
      <main className='py-40 sm:pt-30 min-h-screen flex items-center justify-center bg-white p-6'>
        <div className='bg-gray-200 shadow rounded-4xl items-center w-full sm:h-[630px] sm:flex sm:flex-row items gap-4 overflow-hidden'>
          <img
            src='https://res.cloudinary.com/ahmed--dev/image/upload/v1758479748/auth_fggyyh.jpg'
            className='hidden sm:block h-full w-1/2 object-cover rounded-l-4xl'
          />
          <div className='md:w-1/2'>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;
